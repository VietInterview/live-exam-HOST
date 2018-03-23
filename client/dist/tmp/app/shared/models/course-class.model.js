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
var conference_model_1 = require("./conference.model");
var CourseClass = (function (_super) {
    __extends(CourseClass, _super);
    function CourseClass() {
        var _this = _super.call(this) || this;
        _this.name = undefined;
        _this.course_name = undefined;
        _this.course_id = undefined;
        _this.supervisor_id = undefined;
        _this.supervisor_name = undefined;
        _this.start = undefined;
        _this.end = undefined;
        return _this;
    }
    CourseClass_1 = CourseClass;
    CourseClass.listByCourse = function (context, courseId) {
        return CourseClass_1.search(context, [], "[('course_id','='," + courseId + ")]");
    };
    CourseClass.prototype.delete = function (context) {
        var _this = this;
        return conference_model_1.Conference.byClass(context, this.id).flatMap(function (conference) {
            if (!conference)
                return _this.delete(context);
            else {
                return Rx_1.Observable.zip(_this.delete(context), conference.delete(context));
            }
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], CourseClass.prototype, "start", void 0);
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], CourseClass.prototype, "end", void 0);
    CourseClass = CourseClass_1 = __decorate([
        decorator_1.Model('etraining.course_class'),
        __metadata("design:paramtypes", [])
    ], CourseClass);
    return CourseClass;
    var CourseClass_1;
}(base_model_1.BaseModel));
exports.CourseClass = CourseClass;
