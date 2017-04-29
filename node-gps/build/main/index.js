"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var events_1 = require("events");
var fs_1 = require("fs");
var tty_1 = require("tty");
var nmea = require("nmea-0183");
var GPS = (function (_super) {
    tslib_1.__extends(GPS, _super);
    function GPS(device) {
        var _this = _super.call(this) || this;
        _this.path = device;
        _this.read = new tty_1.ReadStream(fs_1.openSync(device, 'r'));
        _this.read.setRawMode(true);
        _this.read.on('data', function (data) {
            var messages = data.toString().split(/(\r?\n)/g);
            messages.forEach(function (message) {
                if (message.startsWith('$GPGGA')) {
                    console.log(message);
                    _this.processData(message);
                }
            });
        });
        return _this;
    }
    GPS.prototype.processData = function (data) {
        var parsed = nmea.parse(data);
        this.emit('data', parsed);
    };
    return GPS;
}(events_1.EventEmitter));
exports.GPS = GPS;
var gps = new GPS('/dev/ttyACM0');
gps.on('data', function (data) {
    console.log(data);
});
setInterval(function () {
    //console.log('\x1Bc');
}, 1000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQXNDO0FBQ3RDLHlCQUE4QjtBQUM5QiwyQkFBaUM7QUFDakMsZ0NBQWtDO0FBRWxDO0lBQWtCLCtCQUFZO0lBSzdCLGFBQVksTUFBYztRQUExQixZQUNDLGlCQUFPLFNBZ0JQO1FBZEEsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFFbkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdCQUFVLENBQUMsYUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQVk7WUFDakMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNsRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDdkIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzFCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDOztJQUNKLENBQUM7SUFFTyx5QkFBVyxHQUFuQixVQUFvQixJQUFZO1FBQy9CLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNGLFVBQUM7QUFBRCxDQUFDLEFBNUJELENBQWtCLHFCQUFZLEdBNEI3QjtBQUVRLGtCQUFHO0FBRVosSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFbkMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxJQUFZO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxXQUFXLENBQUM7SUFDWCx1QkFBdUI7QUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIn0=