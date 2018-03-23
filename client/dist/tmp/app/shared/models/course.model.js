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
var decorator_1 = require("./decorator");
var Course = (function (_super) {
    __extends(Course, _super);
    function Course() {
        var _this = _super.call(this) || this;
        _this.name = undefined;
        _this.summary = undefined;
        _this.description = undefined;
        _this.code = undefined;
        _this.status = undefined;
        _this.mode = undefined;
        _this.logo = undefined;
        _this.group_id = undefined;
        _this.author_id = undefined;
        _this.author_name = undefined;
        _this.syllabus_id = undefined;
        _this.group_id__DESC__ = undefined;
        return _this;
    }
    Course_1 = Course;
    Course.listByAuthor = function (context, authorId) {
        return Course_1.search(context, [], "[('author_id','='," + authorId + ")]");
    };
    Course.listByGroup = function (context, groupId) {
        return Course_1.search(context, [], "[('group_id','='," + groupId + ")]");
    };
    Course.listByGroupAndMode = function (context, groupId, mode) {
        return Course_1.search(context, [], "[('group_id','='," + groupId + "),('mode','=','" + mode + "')]");
    };
    Course = Course_1 = __decorate([
        decorator_1.Model('etraining.course'),
        __metadata("design:paramtypes", [])
    ], Course);
    return Course;
    var Course_1;
}(base_model_1.BaseModel));
exports.Course = Course;
