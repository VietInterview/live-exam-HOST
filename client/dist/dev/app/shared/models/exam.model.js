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
        decorator_1.Model('liveexam.exam'),
        __metadata("design:paramtypes", [])
    ], Exam);
    return Exam;
}(base_model_1.BaseModel));
exports.Exam = Exam;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBQ3pDLDhCQUE4QztBQUM5Qyx5Q0FBa0Q7QUFFbEQsNkRBQXFEO0FBQ3JELDhCQUFnQztBQUdoQztJQUEwQix3QkFBUztJQUcvQjtRQUFBLFlBQ0ksaUJBQU8sU0FjYjtRQVpBLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDbEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7O0lBQ3RDLENBQUM7SUFrQkUsc0JBQUksNkJBQVc7YUFBZjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsV0FBVyxDQUFDO2dCQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUVELHNDQUF1QixHQUF2QixVQUF3QixPQUFrQjtRQUNsQyxNQUFNLENBQUMsa0NBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQ2xFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFnQjtnQkFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGVBQVUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTVCRDtRQURDLHlCQUFhLEVBQVE7a0NBQ2YsSUFBSTt1Q0FBQztJQUVaO1FBREMseUJBQWEsRUFBUTtrQ0FDakIsSUFBSTtxQ0FBQztJQTFCRCxJQUFJO1FBRGhCLGlCQUFLLENBQUMsZUFBZSxDQUFDOztPQUNWLElBQUksQ0FzRGhCO0lBQUQsV0FBQztDQXRERCxBQXNEQyxDQXREeUIsc0JBQVMsR0FzRGxDO0FBdERZLG9CQUFJIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsLEZpZWxkUHJvcGVydHkgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBBUElDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7IEV4YW1RdWVzdGlvbiB9IGZyb20gJy4vZXhhbS1xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5ATW9kZWwoJ2xpdmVleGFtLmV4YW0nKVxuZXhwb3J0IGNsYXNzIEV4YW0gZXh0ZW5kcyBCYXNlTW9kZWx7XG5cbiAgICAvLyBEZWZhdWx0IGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGJ5IG1hcHBlclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuc3VtbWFyeSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmluc3RydWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVuZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZWxlY3Rvcl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWF4X2F0dGVtcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYWxsb3dfbmF2aWdhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wdWJsaXNoX3Njb3JlID0gdW5kZWZpbmVkO1xuXHR9XG5cbiAgICBuYW1lOnN0cmluZztcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG4gICAgaW5zdHJ1Y3Rpb246IHN0cmluZztcbiAgICBARmllbGRQcm9wZXJ0eTxEYXRlPigpXG4gICAgc3RhcnQ6IERhdGU7XG4gICAgQEZpZWxkUHJvcGVydHk8RGF0ZT4oKVxuICAgIGVuZDogRGF0ZTtcblxuICAgIHNlbGVjdG9yX2lkOiBudW1iZXI7XG4gICAgc2NhbGU6IG51bWJlcjtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIG1heF9hdHRlbXB0OiBudW1iZXI7XG4gICAgYWxsb3dfbmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgICBwdWJsaXNoX3Njb3JlOiBib29sZWFuO1xuXG4gICAgZ2V0IElzQXZhaWxhYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSdwdWJsaXNoZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kLmdldFRpbWUoKSA8IG5vdy5nZXRUaW1lKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnRhaW5zT3BlbkVuZFF1ZXN0aW9uKGNvbnRleHQ6QVBJQ29udGV4dCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgICAgIHJldHVybiBFeGFtUXVlc3Rpb24ubGlzdEJ5RXhhbShjb250ZXh0LCB0aGlzLmlkKS5mbGF0TWFwKHF1ZXN0aW9ucyA9PiB7XG4gICAgICAgICAgICB2YXIgb3BlbkVuZFF1ZXN0aW9ucyA9IF8uZmlsdGVyKHF1ZXN0aW9ucywgKG9iajpFeGFtUXVlc3Rpb24pPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmoudHlwZSA9PSAnZXh0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2Yob3BlbkVuZFF1ZXN0aW9ucy5sZW5ndGggPiAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==
