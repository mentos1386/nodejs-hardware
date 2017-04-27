const spawn = require('child_process').spawn;

const gps = spawn('cat',['/dev/ttyACM0']);    

gps.stdout.on("data", data => {
    console.log(data); 
});