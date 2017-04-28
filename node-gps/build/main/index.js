"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var events_1 = require("events");
var fs_1 = require("fs");
var tty_1 = require("tty");
var GPS = (function (_super) {
    tslib_1.__extends(GPS, _super);
    function GPS(device) {
        var _this = _super.call(this) || this;
        console.log('Started');
        _this.device = new tty_1.ReadStream(fs_1.openSync(device, 'r'));
        _this.device.on('data', _this.processData);
        _this.device.on('error', _this.processError);
        return _this;
    }
    GPS.prototype.processData = function (buffer) {
        console.log(buffer.toString());
    };
    GPS.prototype.processError = function (buffer) {
        var _this = this;
        console.log('Got Error');
        var chunk = buffer.toString('utf8');
        var lines = chunk.split(/(\r?\n)/g);
        lines.forEach(function (line) { return _this.emit('error', line); });
    };
    return GPS;
}(events_1.EventEmitter));
exports.GPS = GPS;
var gps = new GPS('/dev/ttyACM0');
gps.on('message', function (m) { return console.log(m); });
gps.on('error', function (m) { return console.error(m); });
gps.on('close', function (m) { return console.log(m); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQXNDO0FBRXRDLHlCQUE4QjtBQUM5QiwyQkFBaUM7QUFFakM7SUFBa0IsK0JBQVk7SUFJN0IsYUFBWSxNQUFjO1FBQTFCLFlBQ0MsaUJBQU8sU0FPUDtRQUxBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFVLENBQUMsYUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBELEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQztJQUVELHlCQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELDBCQUFZLEdBQVosVUFBYSxNQUFjO1FBQTNCLGlCQU9DO1FBTkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNGLFVBQUM7QUFBRCxDQUFDLEFBMUJELENBQWtCLHFCQUFZLEdBMEI3QjtBQUVRLGtCQUFHO0FBR1osSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFbkMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFTLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFBO0FBQ2hELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO0FBQ2hELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQSJ9