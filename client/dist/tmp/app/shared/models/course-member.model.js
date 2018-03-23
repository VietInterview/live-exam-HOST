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
var conference_member_model_1 = require("./conference-member.model");
var CourseMember = (function (_super) {
    __extends(CourseMember, _super);
    function CourseMember() {
        var _this = _super.call(this) || this;
        _this.course_id = undefined;
        _this.class_id = undefined;
        _this.date_register = undefined;
        _this.status = undefined;
        _this.role = undefined;
        _this.name = undefined;
        _this.course_name = undefined;
        _this.course_code = undefined;
        _this.course_mode = undefined;
        _this.enroll_status = undefined;
        _this.email = undefined;
        _this.phone = undefined;
        _this.user_id = undefined;
        _this.login = undefined;
        _this.image = undefined;
        _this.etraining_group_id = undefined;
        _this.etraining_group_id__DESC__ = undefined;
        return _this;
    }
    CourseMember_1 = CourseMember;
    CourseMember.listByUser = function (context, userId) {
        return CourseMember_1.search(context, [], "[('user_id','='," + userId + ")]");
    };
    CourseMember.listByClass = function (context, classId) {
        return CourseMember_1.search(context, [], "[('class_id','='," + classId + ")]");
    };
    CourseMember.listByCourse = function (context, courseId) {
        return CourseMember_1.search(context, [], "[('course_id','='," + courseId + ")]");
    };
    CourseMember.countTeacher = function (context) {
        return CourseMember_1.count(context, "[('role','=','teacher')]");
    };
    CourseMember.countStudent = function (context) {
        return CourseMember_1.count(context, "[('role','=','student')]");
    };
    CourseMember.byCourseAndUser = function (context, userId, courseId) {
        return CourseMember_1.search(context, [], "[('user_id','='," + userId + "),('course_id','='," + courseId + ")]")
            .map(function (members) {
            if (members.length)
                return members[0];
            else
                return null;
        });
    };
    CourseMember.prototype.delete = function (context) {
        var _this = this;
        return conference_member_model_1.ConferenceMember.byCourseMember(context, this.id).flatMap(function (conferenceMember) {
            if (!conferenceMember)
                return _this.delete(context);
            else {
                return Rx_1.Observable.zip(_this.delete(context), conferenceMember.delete(context));
            }
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], CourseMember.prototype, "date_register", void 0);
    CourseMember = CourseMember_1 = __decorate([
        decorator_1.Model('etraining.course_member'),
        __metadata("design:paramtypes", [])
    ], CourseMember);
    return CourseMember;
    var CourseMember_1;
}(base_model_1.BaseModel));
exports.CourseMember = CourseMember;
