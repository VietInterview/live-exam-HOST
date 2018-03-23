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
        _this.liveexam_group_id = undefined;
        _this.liveexam_group_id__DESC__ = undefined;
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
    ExamMember.prototype.examGrade = function (grades, score) {
        return _.find(grades, function (obj) {
            return obj.min_score <= record["score"] && obj.max_score >= record["score"];
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], ExamMember.prototype, "date_register", void 0);
    ExamMember = ExamMember_1 = __decorate([
        decorator_1.Model('liveexam.exam_member'),
        __metadata("design:paramtypes", [])
    ], ExamMember);
    return ExamMember;
    var ExamMember_1;
}(base_model_1.BaseModel));
exports.ExamMember = ExamMember;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0tbWVtYmVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUF5QztBQUN6Qyx1REFBZ0Q7QUFFaEQsK0NBQXdDO0FBQ3hDLDhCQUE4QztBQUM5Qyx5Q0FBa0Q7QUFFbEQsOEJBQWdDO0FBR2hDO0lBQWdDLDhCQUFTO0lBRXJDO1FBQUEsWUFDSSxpQkFBTyxTQWNWO1FBWkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxLQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDOztJQUMvQyxDQUFDO21CQWpCUSxVQUFVO0lBaUNaLHFCQUFVLEdBQWpCLFVBQW1CLE9BQWtCLEVBQUUsTUFBYztRQUNqRCxNQUFNLENBQUMsWUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sOEJBQW1CLEdBQTFCLFVBQTRCLE9BQWtCLEVBQUUsTUFBYztRQUMxRCxNQUFNLENBQUMsWUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixHQUFDLE1BQU0sR0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFTSxxQkFBVSxHQUFqQixVQUFtQixPQUFrQixFQUFFLE1BQWM7UUFDakQsTUFBTSxDQUFDLFlBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxrQkFBa0IsR0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLHdCQUFhLEdBQXBCLFVBQXNCLE9BQWtCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDcEUsTUFBTSxDQUFDLFlBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxrQkFBa0IsR0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsTUFBTSxHQUFDLElBQUksQ0FBQzthQUM3RixHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ1IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUk7Z0JBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsT0FBa0IsRUFBRSxNQUFhO1FBQ3ZDLE1BQU0sQ0FBQyw2QkFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ1IsTUFBTSxDQUFDLGVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSTtnQkFDQSxNQUFNLENBQUMscUJBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO29CQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRzt3QkFDL0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsTUFBa0IsRUFBRSxLQUFZO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUc7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdDRDtRQURDLHlCQUFhLEVBQVE7a0NBQ1AsSUFBSTtxREFBQztJQTNCWCxVQUFVO1FBRHRCLGlCQUFLLENBQUMsc0JBQXNCLENBQUM7O09BQ2pCLFVBQVUsQ0EwRXRCO0lBQUQsaUJBQUM7O0NBMUVELEFBMEVDLENBMUUrQixzQkFBUyxHQTBFeEM7QUExRVksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IFN1Ym1pc3Npb24gfSBmcm9tICcuL3N1Ym1pc3Npb24ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbUdyYWRlIH0gZnJvbSAnLi9leGFtLWdyYWRlLm1vZGVsJztcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4vYW5zd2VyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsLEZpZWxkUHJvcGVydHkgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBBUElDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBNb2RlbCgnbGl2ZWV4YW0uZXhhbV9tZW1iZXInKVxuZXhwb3J0IGNsYXNzIEV4YW1NZW1iZXIgZXh0ZW5kcyBCYXNlTW9kZWx7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5leGFtX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRhdGVfcmVnaXN0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVucm9sbF9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucm9sZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxvZ2luID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVtYWlsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBob25lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVzZXJfaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGl2ZWV4YW1fZ3JvdXBfaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGl2ZWV4YW1fZ3JvdXBfaWRfX0RFU0NfXyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBleGFtX2lkOiBudW1iZXI7XG4gICAgdXNlcl9pZDogbnVtYmVyO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIGVucm9sbF9zdGF0dXM6IHN0cmluZztcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgbG9naW46IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgQEZpZWxkUHJvcGVydHk8RGF0ZT4oKVxuICAgIGRhdGVfcmVnaXN0ZXI6IERhdGU7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIGxpdmVleGFtX2dyb3VwX2lkOiBudW1iZXI7XG4gICAgbGl2ZWV4YW1fZ3JvdXBfaWRfX0RFU0NfXzogc3RyaW5nO1xuXG4gICAgc3RhdGljIGxpc3RCeUV4YW0oIGNvbnRleHQ6QVBJQ29udGV4dCwgZXhhbUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiBFeGFtTWVtYmVyLnNlYXJjaChjb250ZXh0LFtdLFwiWygnZXhhbV9pZCcsJz0nLFwiK2V4YW1JZCtcIildXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsaXN0Q2FuZGlkYXRlQnlFeGFtKCBjb250ZXh0OkFQSUNvbnRleHQsIGV4YW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gRXhhbU1lbWJlci5zZWFyY2goY29udGV4dCxbXSxcIlsoJ2V4YW1faWQnLCc9JyxcIitleGFtSWQrXCIpLCgncm9sZScsJz0nLCdjYW5kaWRhdGUnKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3RCeVVzZXIoIGNvbnRleHQ6QVBJQ29udGV4dCwgdXNlcklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiBFeGFtTWVtYmVyLnNlYXJjaChjb250ZXh0LFtdLFwiWygndXNlcl9pZCcsJz0nLFwiK3VzZXJJZCtcIildXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBieUV4YW1BbmRVc2VyKCBjb250ZXh0OkFQSUNvbnRleHQsIHVzZXJJZDogbnVtYmVyLCBleGFtSWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBFeGFtTWVtYmVyLnNlYXJjaChjb250ZXh0LFtdLFwiWygndXNlcl9pZCcsJz0nLFwiK3VzZXJJZCtcIiksKCdleGFtX2lkJywnPScsXCIrZXhhbUlkK1wiKV1cIilcbiAgICAgICAgLm1hcChtZW1iZXJzID0+IHtcbiAgICAgICAgICAgIGlmIChtZW1iZXJzLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyc1swXTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhhbVNjb3JlKGNvbnRleHQ6QVBJQ29udGV4dCwgZXhhbUlkOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFN1Ym1pc3Npb24uYnlNZW1iZXIoY29udGV4dCwgdGhpcy5pZCkuZmxhdE1hcChzdWJtaXQgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdWJtaXQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoMCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFuc3dlci5saXN0QnlTdWJtaXQoY29udGV4dCwgc3VibWl0LmlkKS5tYXAoYW5zd2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLnJlZHVjZShhbnN3ZXJzLCAgKHN1bSwgYW5zKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW0gKyBhbnMuc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIH0sMCk7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGFtR3JhZGUoZ3JhZGVzOkV4YW1HcmFkZVtdLCBzY29yZTpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZChncmFkZXMsIChvYmopPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5taW5fc2NvcmUgPD0gcmVjb3JkW1wic2NvcmVcIl0gJiYgb2JqLm1heF9zY29yZSA+PSByZWNvcmRbXCJzY29yZVwiXVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==
