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
var exam_question_model_1 = require("./exam-question.model");
var _ = require("underscore");
var Exam = (function (_super) {
    __extends(Exam, _super);
    function Exam() {
        var _this = _super.call(this) || this;
        _this.name = undefined;
        _this.summary = undefined;
        _this.instruction = undefined;
        _this.start = undefined;
        _this.end = undefined;
        _this.selector_id = undefined;
        _this.status = undefined;
        _this.scale = undefined;
        _this.duration = undefined;
        _this.max_attempt = undefined;
        _this.allow_navigation = undefined;
        _this.publish_score = undefined;
        return _this;
    }
    Object.defineProperty(Exam.prototype, "IsAvailable", {
        get: function () {
            if (this.status != 'published')
                return false;
            var now = new Date();
            if (this.end.getTime() < now.getTime())
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Exam.prototype.containsOpenEndQuestion = function (context) {
        return exam_question_model_1.ExamQuestion.listByExam(context, this.id).flatMap(function (questions) {
            var openEndQuestions = _.filter(questions, function (obj) {
                return obj.type == 'ext';
            });
            return Rx_1.Observable.of(openEndQuestions.length > 0);
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], Exam.prototype, "start", void 0);
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], Exam.prototype, "end", void 0);
    Exam = __decorate([
        decorator_1.Model('etraining.exam'),
        __metadata("design:paramtypes", [])
    ], Exam);
    return Exam;
}(base_model_1.BaseModel));
exports.Exam = Exam;
