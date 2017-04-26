const SerialPort = require('serialport');

const gpsPort = new SerialPort('/dev/ttyACM0');

gpsPort.on('data', data => console.log(data));

gpsPort.on('error', err => console.error(err));