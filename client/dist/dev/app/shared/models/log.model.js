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
var ExamLog = (function (_super) {
    __extends(ExamLog, _super);
    function ExamLog() {
        var _this = _super.call(this) || this;
        _this.user_id = undefined;
        _this.exam_id = undefined;
        _this.res_id = undefined;
        _this.res_model = undefined;
        _this.note = undefined;
        _this.code = undefined;
        _this.start = undefined;
        _this.attachment_url = undefined;
        _this.attachment_id = undefined;
        return _this;
    }
    ExamLog_1 = ExamLog;
    ExamLog.userExamActivity = function (context, userId, examId) {
        var domain = "";
        if (examId)
            domain = "[('user_id','='," + userId + "),('exam_id','='," + examId + ")]";
        else
            domain = "[('user_id','='," + userId + ")]";
        return ExamLog_1.search(context, [], domain);
    };
    ExamLog.startExam = function (context, userId, examId, submit) {
        var log = new ExamLog_1();
        log.user_id = userId;
        log.exam_id = examId;
        log.res_id = submit.id;
        log.res_model = submission_model_1.Submission.Model;
        log.note = 'Start exam';
        log.code = 'START_EXAM';
        log.start = new Date();
        return log.save(context);
    };
    ExamLog.finishExam = function (context, userId, examId, submit) {
        var log = new ExamLog_1();
        log.user_id = userId;
        log.exam_id = examId;
        log.res_id = submit.id;
        log.res_model = submission_model_1.Submission.Model;
        log.note = 'Finish exam';
        log.code = 'FINISH_EXAM';
        log.start = new Date();
        return log.save(context);
    };
    ExamLog.startAnswer = function (context, userId, examId, answer) {
        var log = new ExamLog_1();
        log.user_id = userId;
        log.exam_id = examId;
        log.res_id = answer.id;
        log.res_model = answer_model_1.Answer.Model;
        log.note = 'Start answer';
        log.code = "START_ANSWER";
        log.start = new Date();
        return log.save(context);
    };
    ExamLog.finishAnswer = function (context, userId, examId, answer) {
        var log = new ExamLog_1();
        log.user_id = userId;
        log.exam_id = examId;
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
    ], ExamLog.prototype, "start", void 0);
    ExamLog = ExamLog_1 = __decorate([
        decorator_1.Model('liveexam.exam_log'),
        __metadata("design:paramtypes", [])
    ], ExamLog);
    return ExamLog;
    var ExamLog_1;
}(base_model_1.BaseModel));
exports.ExamLog = ExamLog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2xvZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBeUM7QUFFekMseUNBQW1EO0FBR25ELCtDQUF3QztBQUN4Qyx1REFBZ0Q7QUFHaEQ7SUFBNkIsMkJBQVM7SUFFbEM7UUFBQSxZQUNJLGlCQUFPLFNBV1Y7UUFURyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7SUFDbkMsQ0FBQztnQkFkUSxPQUFPO0lBNEJULHdCQUFnQixHQUF2QixVQUF3QixPQUFrQixFQUFFLE1BQU0sRUFBRSxNQUFNO1FBQ3RELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUCxNQUFNLEdBQUcsa0JBQWtCLEdBQUMsTUFBTSxHQUFDLG1CQUFtQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDdkUsSUFBSTtZQUNBLE1BQU0sR0FBRyxrQkFBa0IsR0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFBO1FBQzNDLE1BQU0sQ0FBQyxTQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLGlCQUFTLEdBQWhCLFVBQWlCLE9BQWtCLEVBQUUs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RG5CLGlCQUFLLENBQUMsbUJBQW1CLENBQUM7O09BQ2QsT0FBTyxDQXFGbkI7SUFBRCxjQUFDOztDQXJGRCxBQXFGQyxDQXJGNEIsc0JBQVMsR0FxRnJDO0FBckZZLDBCQUFPIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL2xvZy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdST1VQX0NBVEVHT1JZfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTW9kZWwsIEZpZWxkUHJvcGVydHkgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBBUElDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7IEV4YW1NZW1iZXIgfSBmcm9tICcuL2V4YW0tbWVtYmVyLm1vZGVsJztcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4vYW5zd2VyLm1vZGVsJztcbmltcG9ydCB7IFN1Ym1pc3Npb24gfSBmcm9tICcuL3N1Ym1pc3Npb24ubW9kZWwnO1xuXG5ATW9kZWwoJ2xpdmVleGFtLmV4YW1fbG9nJylcbmV4cG9ydCBjbGFzcyBFeGFtTG9nIGV4dGVuZHMgQmFzZU1vZGVse1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXNlcl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5leGFtX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlc19pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXNfbW9kZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubm90ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmF0dGFjaG1lbnRfdXJsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmF0dGFjaG1lbnRfaWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmVzX2lkOiBudW1iZXI7XG4gICAgdXNlcl9pZDogbnVtYmVyO1xuICAgIGV4YW1faWQ6IG51bWJlcjtcbiAgICByZXNfbW9kZWw6IHN0cmluZztcbiAgICBub3RlOiBzdHJpbmc7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIEBGaWVsZFByb3BlcnR5PERhdGU+KClcbiAgICBzdGFydDogRGF0ZTtcbiAgICBhdHRhY2htZW50X3VybDogc3RyaW5nO1xuICAgIGF0dGFjaG1lbnRfaWQ6IG51bWJlcjtcblxuXG4gICAgc3RhdGljIHVzZXJFeGFtQWN0aXZpdHkoY29udGV4dDpBUElDb250ZXh0LCB1c2VySWQsIGV4YW1JZCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIGRvbWFpbiA9IFwiXCI7XG4gICAgICAgIGlmIChleGFtSWQpXG4gICAgICAgICAgICBkb21haW4gPSBcIlsoJ3VzZXJfaWQnLCc9JyxcIit1c2VySWQrXCIpLCgnZXhhbV9pZCcsJz0nLFwiK2V4YW1JZCtcIildXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRvbWFpbiA9IFwiWygndXNlcl9pZCcsJz0nLFwiK3VzZXJJZCtcIildXCJcbiAgICAgICAgcmV0dXJuIEV4YW1Mb2cuc2VhcmNoKGNvbnRleHQsW10sIGRvbWFpbiApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdGFydEV4YW0oY29udGV4dDpBUElDb250ZXh0LCB1c2VySWQ6bnVtYmVyLCBleGFtSWQ6IG51bWJlciwgc3VibWl0OlN1Ym1pc3Npb24pOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciBsb2cgPSBuZXcgRXhhbUxvZygpO1xuICAgICAgICBsb2cudXNlcl9pZCA9IHVzZXJJZDtcbiAgICAgICAgbG9nLmV4YW1faWQgPSAgZXhhbUlkO1xuICAgICAgICBsb2cucmVzX2lkID0gc3VibWl0LmlkO1xuICAgICAgICBsb2cucmVzX21vZGVsID0gU3VibWlzc2lvbi5Nb2RlbDtcbiAgICAgICAgbG9nLm5vdGUgPSAnU3RhcnQgZXhhbSc7XG4gICAgICAgIGxvZy5jb2RlID0gJ1NUQVJUX0VYQU0nO1xuICAgICAgICBsb2cuc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gbG9nLnNhdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmlzaEV4YW0oY29udGV4dDpBUElDb250ZXh0LCB1c2VySWQ6bnVtYmVyLCBleGFtSWQ6IG51bWJlciwgc3VibWl0OlN1Ym1pc3Npb24pOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciBsb2cgPSBuZXcgRXhhbUxvZygpO1xuICAgICAgICBsb2cudXNlcl9pZCA9IHVzZXJJZDtcbiAgICAgICAgbG9nLmV4YW1faWQgPSAgZXhhbUlkO1xuICAgICAgICBsb2cucmVzX2lkID0gc3VibWl0LmlkO1xuICAgICAgICBsb2cucmVzX21vZGVsID0gU3VibWlzc2lvbi5Nb2RlbDtcbiAgICAgICAgbG9nLm5vdGUgPSAnRmluaXNoIGV4YW0nO1xuICAgICAgICBsb2cuY29kZSA9ICdGSU5JU0hfRVhBTSc7XG4gICAgICAgIGxvZy5zdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiBsb2cuc2F2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RhcnRBbnN3ZXIoY29udGV4dDpBUElDb250ZXh0LCB1c2VySWQ6bnVtYmVyLGV4YW1JZDogbnVtYmVyLCAgYW5zd2VyOkFuc3dlcik6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIGxvZyA9IG5ldyBFeGFtTG9nKCk7XG4gICAgICAgIGxvZy51c2VyX2lkID0gdXNlcklkO1xuICAgICAgICBsb2cuZXhhbV9pZCA9ICBleGFtSWQ7XG4gICAgICAgIGxvZy5yZXNfaWQgPSBhbnN3ZXIuaWQ7XG4gICAgICAgIGxvZy5yZXNfbW9kZWwgPSBBbnN3ZXIuTW9kZWw7XG4gICAgICAgIGxvZy5ub3RlID0gJ1N0YXJ0IGFuc3dlcic7XG4gICAgICAgIGxvZy5jb2RlID0gXCJTVEFSVF9BTlNXRVJcIjtcbiAgICAgICAgbG9nLnN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGxvZy5zYXZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaW5pc2hBbnN3ZXIoY29udGV4dDpBUElDb250ZXh0LCB1c2VySWQ6bnVtYmVyLCBleGFtSWQ6IG51bWJlciwgYW5zd2VyOkFuc3dlcik6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIGxvZyA9IG5ldyBFeGFtTG9nKCk7XG4gICAgICAgIGxvZy51c2VyX2lkID0gdXNlcklkO1xuICAgICAgICBsb2cuZXhhbV9pZCA9ICBleGFtSWQ7XG4gICAgICAgIGxvZy5yZXNfaWQgPSBhbnN3ZXIuaWQ7XG4gICAgICAgIGxvZy5yZXNfbW9kZWwgPSBBbnN3ZXIuTW9kZWw7XG4gICAgICAgIGxvZy5ub3RlID0gJ0Nsb3NlIGFuc3dlcic7XG4gICAgICAgIGxvZy5jb2RlID0gXCJDTE9TRV9BTlNXRVJcIjtcbiAgICAgICAgbG9nLnN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGxvZy5zYXZlKGNvbnRleHQpO1xuICAgIH1cblxufSJdfQ==
