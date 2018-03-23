"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeConvertPipe = (function () {
    function TimeConvertPipe() {
    }
    TimeConvertPipe.prototype.transform = function (ms, scale) {
        if (scale == 'sec')
            ms = Math.floor(ms / 1000);
        if (scale == 'min')
            ms = Math.floor(ms / 1000 / 60);
        if (scale == 'hour')
            ms = Math.floor(ms / 1000 / 60 / 60);
        if (scale == 'day')
            ms = Math.floor(ms / 1000 / 60 / 60 / 24);
        return ms;
    };
    TimeConvertPipe = __decorate([
        core_1.Pipe({ name: 'timeConvert', pure: false })
    ], TimeConvertPipe);
    return TimeConvertPipe;
}());
exports.TimeConvertPipe = TimeConvertPipe;
var ClockPipe = (function () {
    function ClockPipe() {
    }
    ClockPipe.prototype.transform = function (ms) {
        if (!ms)
            return "";
        var sec = Math.floor(ms / 1000);
        var min = Math.floor(sec / 60);
        sec = sec % 60;
        var minStr = min < 10 ? "0" + min : '' + min;
        var secStr = sec < 10 ? "0" + sec : '' + sec;
        return minStr + ':' + secStr;
    };
    ClockPipe = __decorate([
        core_1.Pipe({ name: 'clock', pure: false })
    ], ClockPipe);
    return ClockPipe;
}());
exports.ClockPipe = ClockPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvdGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBR3BEO0lBQUE7SUFZQSxDQUFDO0lBWEcsbUNBQVMsR0FBVCxVQUFVLEVBQVUsRUFBRSxLQUFhO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDZixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNmLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQztZQUNoQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ2YsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBWFEsZUFBZTtRQUQzQixXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztPQUM5QixlQUFlLENBWTNCO0lBQUQsc0JBQUM7Q0FaRCxBQVlDLElBQUE7QUFaWSwwQ0FBZTtBQWU1QjtJQUFBO0lBV0EsQ0FBQztJQVZHLDZCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsRUFBRSxHQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxFQUFFLEdBQUMsR0FBRyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQTtJQUNoQyxDQUFDO0lBVlEsU0FBUztRQURyQixXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztPQUN4QixTQUFTLENBV3JCO0lBQUQsZ0JBQUM7Q0FYRCxBQVdDLElBQUE7QUFYWSw4QkFBUyIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL3RpbWUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAndGltZUNvbnZlcnQnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFRpbWVDb252ZXJ0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShtczogbnVtYmVyLCBzY2FsZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHNjYWxlID09ICdzZWMnKVxuICAgICAgICAgICAgbXMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgICAgIGlmIChzY2FsZSA9PSAnbWluJylcbiAgICAgICAgICAgIG1zID0gTWF0aC5mbG9vcihtcyAvIDEwMDAgLyA2MCk7XG4gICAgICAgIGlmIChzY2FsZSA9PSAnaG91cicpXG4gICAgICAgICAgICBtcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwIC8gNjAgLyA2MCk7XG4gICAgICAgIGlmIChzY2FsZSA9PSAnZGF5JylcbiAgICAgICAgICAgIG1zID0gTWF0aC5mbG9vcihtcyAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICByZXR1cm4gbXM7XG4gICAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICdjbG9jaycsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgQ2xvY2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKG1zOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIW1zKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBzZWMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcbiAgICAgICAgc2VjID0gc2VjICUgNjA7XG4gICAgICAgIHZhciBtaW5TdHIgPSAgbWluIDwgMTAgPyAgXCIwXCIgKyBtaW4gOicnK21pbjsgXG4gICAgICAgIHZhciBzZWNTdHIgPSAgc2VjIDwgMTAgPyAgXCIwXCIgKyBzZWMgOicnK3NlYzsgXG4gICAgICAgIHJldHVybiBtaW5TdHIgKyAnOicgKyBzZWNTdHJcbiAgICB9XG59Il19
