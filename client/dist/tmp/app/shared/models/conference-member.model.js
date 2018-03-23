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
var room_member_model_1 = require("./meeting/room-member.model");
var ConferenceMember = (function (_super) {
    __extends(ConferenceMember, _super);
    function ConferenceMember() {
        var _this = _super.call(this) || this;
        _this.course_member_id = undefined;
        _this.email = undefined;
        _this.phone = undefined;
        _this.name = undefined;
        _this.user_id = undefined;
        _this.conference_id = undefined;
        _this.room_member_ref = undefined;
        _this.etraining_group_id = undefined;
        _this.etraining_group_id__DESC__ = undefined;
        _this.is_active = undefined;
        _this.class_id = undefined;
        return _this;
    }
    ConferenceMember_1 = ConferenceMember;
    ConferenceMember.prototype.delete = function (context) {
        var _this = this;
        return room_member_model_1.RoomMember.byRef(context, this.room_member_ref).flatMap(function (roomMember) {
            if (!roomMember)
                return _this.delete(context);
            else {
                return Rx_1.Observable.zip(_this.delete(context), roomMember.delete(context));
            }
        });
    };
    ConferenceMember.byCourseMember = function (context, memberId) {
        return ConferenceMember_1.search(context, [], "[('course_member_id','='," + memberId + ")]")
            .map(function (members) {
            if (members.length)
                return members[0];
            else
                return null;
        });
    };
    ConferenceMember.listByUser = function (context, userId) {
        return ConferenceMember_1.search(context, [], "[('user_id','='," + userId + ")]");
    };
    ConferenceMember.listByClass = function (context, classId) {
        return ConferenceMember_1.search(context, [], "[('class_id','='," + classId + ")]");
    };
    ConferenceMember = ConferenceMember_1 = __decorate([
        decorator_1.Model('etraining.conference_member'),
        __metadata("design:paramtypes", [])
    ], ConferenceMember);
    return ConferenceMember;
    var ConferenceMember_1;
}(base_model_1.BaseModel));
exports.ConferenceMember = ConferenceMember;
