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
var ExamQuestion = (function (_super) {
    __extends(ExamQuestion, _super);
    function ExamQuestion() {
        var _this = _super.call(this) || this;
        _this.title = undefined;
        _this.content = undefined;
        _this.explanation = undefined;
        _this.type = undefined;
        _this.level = undefined;
        _this.group_id = undefined;
        _this.question_id = undefined;
        _this.exam_id = undefined;
        _this.score = undefined;
        _this.order = undefined;
        _this.group_id__DESC__ = undefined;
        return _this;
    }
    ExamQuestion_1 = ExamQuestion;
    ExamQuestion.listByExam = function (context, examId) {
        return ExamQuestion_1.search(context, [], "[('exam_id','='," + examId + ")]");
    };
    ExamQuestion.countByExam = function (context, examId) {
        return ExamQuestion_1.count(context, "[('exam_id','='," + examId + ")]");
    };
    ExamQuestion.listOpenQuestionByExam = function (context, examId) {
        return ExamQuestion_1.search(context, [], "[('exam_id','='," + examId + "),('type','=','ext')]");
    };
    ExamQuestion.byQuestion = function (context, questionId) {
        return ExamQuestion_1.search(context, [], "[('question_id','='," + questionId + ")]").map(function (questions) {
            return questions.length ? questions[0] : null;
        });
    };
    ExamQuestion = ExamQuestion_1 = __decorate([
        decorator_1.Model('liveexam.exam_question'),
        __metadata("design:paramtypes", [])
    ], ExamQuestion);
    return ExamQuestion;
    var ExamQuestion_1;
}(base_model_1.BaseModel));
exports.ExamQuestion = ExamQuestion;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBRXpDLHlDQUFvQztBQUlwQztJQUFrQyxnQ0FBUztJQUd2QztRQUFBLFlBQ0ksaUJBQU8sU0FhYjtRQVhBLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O0lBQ3pDLENBQUM7cUJBakJXLFlBQVk7SUErQmQsdUJBQVUsR0FBakIsVUFBbUIsT0FBa0IsRUFBRSxNQUFjO1FBQ2pELE1BQU0sQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsa0JBQWtCLEdBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSx3QkFBVyxHQUFsQixVQUFvQixPQUFrQixFQUFFLE1BQWM7UUFDbEQsTUFBTSxDQUFDLGNBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLGtCQUFrQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sbUNBQXNCLEdBQTdCLFVBQStCLE9BQWtCLEVBQUUsTUFBYztRQUM3RCxNQUFNLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixHQUFDLE1BQU0sR0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTSx1QkFBVSxHQUFqQixVQUFtQixPQUFrQixFQUFFLFVBQWtCO1FBQ3JELE1BQU0sQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsc0JBQXNCLEdBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7WUFDdkYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9DUSxZQUFZO1FBRHhCLGlCQUFLLENBQUMsd0JBQXdCLENBQUM7O09BQ25CLFlBQVksQ0FpRHhCO0lBQUQsbUJBQUM7O0NBakRELEFBaURDLENBakRpQyxzQkFBUyxHQWlEMUM7QUFqRFksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvZXhhbS1xdWVzdGlvbi5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdST1VQX0NBVEVHT1JZfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBBUElDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcblxuQE1vZGVsKCdsaXZlZXhhbS5leGFtX3F1ZXN0aW9uJylcbmV4cG9ydCBjbGFzcyBFeGFtUXVlc3Rpb24gZXh0ZW5kcyBCYXNlTW9kZWx7XG5cbiAgICAvLyBEZWZhdWx0IGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGJ5IG1hcHBlclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy50aXRsZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5leHBsYW5hdGlvbiA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZ3JvdXBfaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucXVlc3Rpb25faWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZXhhbV9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zY29yZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcmRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ncm91cF9pZF9fREVTQ19fID0gdW5kZWZpbmVkO1xuXHR9XG5cbiAgICBxdWVzdGlvbl9pZDogbnVtYmVyO1xuICAgIGV4YW1faWQ6IG51bWJlcjtcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIG9yZGVyOiBudW1iZXI7XG4gICAgbGV2ZWw6IHN0cmluZztcbiAgICB0aXRsZTpzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGV4cGxhbmF0aW9uOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGdyb3VwX2lkOiBudW1iZXI7XG4gICAgZ3JvdXBfaWRfX0RFU0NfXzogc3RyaW5nO1xuXG4gICAgc3RhdGljIGxpc3RCeUV4YW0oIGNvbnRleHQ6QVBJQ29udGV4dCwgZXhhbUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiBFeGFtUXVlc3Rpb24uc2VhcmNoKGNvbnRleHQsW10sXCJbKCdleGFtX2lkJywnPScsXCIrZXhhbUlkK1wiKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvdW50QnlFeGFtKCBjb250ZXh0OkFQSUNvbnRleHQsIGV4YW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gRXhhbVF1ZXN0aW9uLmNvdW50KGNvbnRleHQsXCJbKCdleGFtX2lkJywnPScsXCIrZXhhbUlkK1wiKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3RPcGVuUXVlc3Rpb25CeUV4YW0oIGNvbnRleHQ6QVBJQ29udGV4dCwgZXhhbUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiBFeGFtUXVlc3Rpb24uc2VhcmNoKGNvbnRleHQsW10sXCJbKCdleGFtX2lkJywnPScsXCIrZXhhbUlkK1wiKSwoJ3R5cGUnLCc9JywnZXh0JyldXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBieVF1ZXN0aW9uKCBjb250ZXh0OkFQSUNvbnRleHQsIHF1ZXN0aW9uSWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAgICAgcmV0dXJuIEV4YW1RdWVzdGlvbi5zZWFyY2goY29udGV4dCxbXSxcIlsoJ3F1ZXN0aW9uX2lkJywnPScsXCIrcXVlc3Rpb25JZCtcIildXCIpLm1hcChxdWVzdGlvbnMgPT57XG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb25zLmxlbmd0aCA/IHF1ZXN0aW9uc1swXTogbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=
