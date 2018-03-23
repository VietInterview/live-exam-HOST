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
var answer_model_1 = require("./answer.model");
var submission_model_1 = require("./submission.model");
var UserLog = (function (_super) {
    __extends(UserLog, _super);
    function UserLog() {
        var _this = _super.call(this) || this;
        _this.user_id = undefined;
        _this.res_id = undefined;
        _this.res_model = undefined;
        _this.note = undefined;
        _this.code = undefined;
        _this.start = undefined;
        _this.attachment_url = undefined;
        _this.attachment_id = undefined;
        return _this;
    }
    UserLog_1 = UserLog;
    UserLog.userStudyActivity = function (context, userId, courseId) {
        var domain = "";
        if (courseId)
            domain = "[('user_id','='," + userId + "),('res_id','='," + courseId + "),('res_model','=','etraining.course')]";
        else
            domain = "[('user_id','='," + userId + "),('res_model','=','etraining.course')]";
        return UserLog_1.search(context, [], domain);
    };
    UserLog.userExamActivity = function (context, userId, examId) {
        var domain = "";
        if (examId)
            domain = "[('user_id','='," + userId + "),('res_id','='," + examId + "),('res_model','=','etraining.exam')]";
        else
            domain = "[('user_id','='," + userId + "),('res_model','=','etraining.exam')]";
        return UserLog_1.search(context, [], domain);
    };
    UserLog.courseActivity = function (context, courseId) {
        return UserLog_1.search(context, [], "[('res_id','='," + courseId + "),('res_model','=','etraining.course')]");
    };
    UserLog.startExam = function (context, userId, submit) {
        var log = new UserLog_1();
        log.user_id = userId;
        log.res_id = submit.id;
        log.res_model = submission_model_1.Submission.Model;
        log.note = 'Start exam';
        log.code = 'START_EXAM';
        log.start = new Date();
        return log.save(context);
    };
    UserLog.finishExam = function (context, userId, submit) {
        var log = new UserLog_1();
        log.user_id = userId;
        log.res_id = submit.id;
        log.res_model = submission_model_1.Submission.Model;
        log.note = 'Finish exam';
        log.code = 'FINISH_EXAM';
        log.start = new Date();
        return log.save(context);
    };
    UserLog.startAnswer = function (context, userId, answer) {
        var log = new UserLog_1();
        log.user_id = userId;
        log.res_id = answer.id;
        log.res_model = answer_model_1.Answer.Model;
        log.note = 'Start answer';
        log.code = "START_ANSWER";
        log.start = new Date();
        return log.save(context);
    };
    UserLog.finishAnswer = function (context, userId, answer) {
        var log = new UserLog_1();
        log.user_id = userId;
        log.res_id = answer.id;
        log.res_model = answer_model_1.Answer.Model;
        log.note = 'Close answer';
        log.code = "CLOSE_ANSWER";
        log.start = new Date();
        return log.save(context);
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], UserLog.prototype, "start", void 0);
    UserLog = UserLog_1 = __decorate([
        decorator_1.Model('etraining.user_log'),
        __metadata("design:paramtypes", [])
    ], UserLog);
    return UserLog;
    var UserLog_1;
}(base_model_1.BaseModel));
exports.UserLog = UserLog;
