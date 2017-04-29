import { EventEmitter } from 'events';
import { openSync } from 'fs';
import { ReadStream } from 'tty';
import * as nmea from 'nmea-0183';

class GPS extends EventEmitter {

	path: string;
	read: ReadStream;

	constructor(device: string) {
		super();

		this.path = device;

		this.read = new ReadStream(openSync(device, 'r'));
		this.read.setRawMode(true);

		this.read.on('data', (data: Buffer) => {
			const messages = data.toString().split(/(\r?\n)/g)
			messages.forEach(message => {
				if(message.startsWith('$GPGGA')) {
					console.log(message)
					this.processData(message)
				}
			})
		});
	}

	private processData(data: string) {
		const parsed = nmea.parse(data);
		this.emit('data', parsed)
	}
}

export { GPS };

const gps = new GPS('/dev/ttyACM0')

gps.on('data', (data: Object) => {
	console.log(data)
});

setInterval(() => {
	//console.log('\x1Bc');
}, 1000);
