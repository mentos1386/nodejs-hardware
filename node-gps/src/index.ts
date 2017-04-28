import { EventEmitter } from 'events';
import { Readable } from 'stream';
import { openSync } from 'fs';
import { ReadStream } from 'tty';

class GPS extends EventEmitter {

	device: Readable;

	constructor(device: string) {
		super();

		console.log('Started');
		this.device = new ReadStream(openSync(device, 'r'));

		this.device.on('data', this.processData);
		this.device.on('error', this.processError);
	}

	processData(buffer: Buffer) {
		console.log(buffer.toString())
	}

	processError(buffer: Buffer) {
		console.log('Got Error');
		
		const chunk = buffer.toString('utf8'); 
		const lines = chunk.split(/(\r?\n)/g);

		lines.forEach((line: string) => this.emit('error', line));
	}
}

export { GPS };


const gps = new GPS('/dev/ttyACM0')

gps.on('message', (m: string) => console.log(m))
gps.on('error', (m: string) => console.error(m))
gps.on('close', (m: string) => console.log(m))
