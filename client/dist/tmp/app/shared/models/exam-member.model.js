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
var submission_model_1 = require("./submission.model");
var answer_model_1 = require("./answer.model");
var Rx_1 = require("rxjs/Rx");
var decorator_1 = require("./decorator");
var _ = require("underscore");
var ExamMember = (function (_super) {
    __extends(ExamMember, _super);
    function ExamMember() {
        var _this = _super.call(this) || this;
        _this.exam_id = undefined;
        _this.date_register = undefined;
        _this.status = undefined;
        _this.enroll_status = undefined;
        _this.role = undefined;
        _this.name = undefined;
        _this.login = undefined;
        _this.email = undefined;
        _this.phone = undefined;
        _this.user_id = undefined;
        _this.etraining_group_id = undefined;
        _this.etraining_group_id__DESC__ = undefined;
        return _this;
    }
    ExamMember_1 = ExamMember;
    ExamMember.listByExam = function (context, examId) {
        return ExamMember_1.search(context, [], "[('exam_id','='," + examId + ")]");
    };
    ExamMember.listCandidateByExam = function (context, examId) {
        return ExamMember_1.search(context, [], "[('exam_id','='," + examId + "),('role','=','candidate')]");
    };
    ExamMember.listByUser = function (context, userId) {
        return ExamMember_1.search(context, [], "[('user_id','='," + userId + ")]");
    };
    ExamMember.byExamAndUser = function (context, userId, examId) {
        return ExamMember_1.search(context, [], "[('user_id','='," + userId + "),('exam_id','='," + examId + ")]")
            .map(function (members) {
            if (members.length)
                return members[0];
            else
                return null;
        });
    };
    ExamMember.prototype.examScore = function (context, examId) {
        return submission_model_1.Submission.byMember(context, this.id).flatMap(function (submit) {
            if (!submit)
                return Rx_1.Observable.of(0);
            else
                return answer_model_1.Answer.listBySubmit(context, submit.id).map(function (answers) {
                    return _.reduce(answers, function (sum, ans) {
                        return sum + ans.score;
                    }, 0);
                });
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], ExamMember.prototype, "date_register", void 0);
    ExamMember = ExamMember_1 = __decorate([
        decorator_1.Model('etraining.exam_member'),
        __metadata("design:paramtypes", [])
    ], ExamMember);
    return ExamMember;
    var ExamMember_1;
}(base_model_1.BaseModel));
exports.ExamMember = ExamMember;
