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
var QuestionOption = (function (_super) {
    __extends(QuestionOption, _super);
    function QuestionOption() {
        var _this = _super.call(this) || this;
        _this.question_id = undefined;
        _this.content = undefined;
        _this.is_correct = undefined;
        return _this;
    }
    QuestionOption_1 = QuestionOption;
    QuestionOption.listByQuestion = function (context, questionId) {
        return QuestionOption_1.search(context, [], "[('question_id','='," + questionId + ")]");
    };
    QuestionOption = QuestionOption_1 = __decorate([
        decorator_1.Model('liveexam.option'),
        __metadata("design:paramtypes", [])
    ], QuestionOption);
    return QuestionOption;
    var QuestionOption_1;
}(base_model_1.BaseModel));
exports.QuestionOption = QuestionOption;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL29wdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBeUM7QUFFekMseUNBQW9DO0FBSXBDO0lBQW9DLGtDQUFTO0lBR3pDO1FBQUEsWUFDSSxpQkFBTyxTQUtiO1FBSEEsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7O0lBQzdCLENBQUM7dUJBVFcsY0FBYztJQWVoQiw2QkFBYyxHQUFyQixVQUFzQixPQUFrQixFQUFFLFVBQVU7UUFDaEQsTUFBTSxDQUFDLGdCQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUUsc0JBQXNCLEdBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFqQlEsY0FBYztRQUQxQixpQkFBSyxDQUFDLGlCQUFpQixDQUFDOztPQUNaLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7O0NBbkJELEFBbUJDLENBbkJtQyxzQkFBUyxHQW1CNUM7QUFuQlksd0NBQWMiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvb3B0aW9uLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR1JPVVBfQ0FURUdPUll9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4vYmFzZS5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vZGVjb3JhdG9yJztcbmltcG9ydCB7IEFQSUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuXG5ATW9kZWwoJ2xpdmVleGFtLm9wdGlvbicpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25PcHRpb24gZXh0ZW5kcyBCYXNlTW9kZWx7XG5cbiAgICAvLyBEZWZhdWx0IGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGJ5IG1hcHBlclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy5xdWVzdGlvbl9pZCA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5pc19jb3JyZWN0ID0gdW5kZWZpbmVkO1xuXHR9XG5cbiAgICBpc19jb3JyZWN0OmJvb2xlYW47XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uX2lkOiBudW1iZXI7XG5cbiAgICBzdGF0aWMgbGlzdEJ5UXVlc3Rpb24oY29udGV4dDpBUElDb250ZXh0LCBxdWVzdGlvbklkKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gUXVlc3Rpb25PcHRpb24uc2VhcmNoKGNvbnRleHQsW10sIFwiWygncXVlc3Rpb25faWQnLCc9JyxcIitxdWVzdGlvbklkK1wiKV1cIik7XG4gICAgfVxuXG59XG4iXX0=
