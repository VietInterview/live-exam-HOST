"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_model_1 = require("./base.model");
var Rx_1 = require("rxjs/Rx");
var decorator_1 = require("./decorator");
var room_model_1 = require("./meeting/room.model");
var Conference = (function (_super) {
    __extends(Conference, _super);
    function Conference() {
        var _this = _super.call(this) || this;
        _this.class_id = undefined;
        _this.room_ref = undefined;
        _this.name = undefined;
        _this.status = undefined;
        _this.room_pass = undefined;
        return _this;
    }
    Conference_1 = Conference;
    Conference.prototype.delete = function (context) {
        var _this = this;
        return room_model_1.Room.byRef(context, this.room_ref).flatMap(function (room) {
            if (!room)
                return _this.delete(context);
            else {
                return Rx_1.Observable.zip(_this.delete(context), room.delete(context));
            }
        });
    };
    Conference.byClass = function (context, classId) {
        return Conference_1.search(context, [], "[('class_id','='," + classId + ")]")
            .map(function (conferences) {
            if (conferences.length)
                return conferences[0];
            else
                return null;
        });
    };
    Conference = Conference_1 = __decorate([
        decorator_1.Model('etraining.conference'),
        __metadata("design:paramtypes", [])
    ], Conference);
    return Conference;
    var Conference_1;
}(base_model_1.BaseModel));
exports.Conference = Conference;
