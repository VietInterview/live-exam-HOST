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
var ExamGrade = (function (_super) {
    __extends(ExamGrade, _super);
    function ExamGrade() {
        var _this = _super.call(this) || this;
        _this.name = undefined;
        _this.exam_id = undefined;
        _this.min_score = undefined;
        _this.max_score = undefined;
        return _this;
    }
    ExamGrade_1 = ExamGrade;
    ExamGrade.listByExam = function (context, examId) {
        return ExamGrade_1.search(context, [], "[('exam_id','='," + examId + ")]");
    };
    ExamGrade = ExamGrade_1 = __decorate([
        decorator_1.Model('liveexam.exam_grade'),
        __metadata("design:paramtypes", [])
    ], ExamGrade);
    return ExamGrade;
    var ExamGrade_1;
}(base_model_1.BaseModel));
exports.ExamGrade = ExamGrade;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0tZ3JhZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBRXpDLHlDQUFvQztBQUlwQztJQUErQiw2QkFBUztJQUdwQztRQUFBLFlBQ0ksaUJBQU8sU0FNYjtRQUpBLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUM1QixDQUFDO2tCQVZXLFNBQVM7SUFpQlgsb0JBQVUsR0FBakIsVUFBbUIsT0FBa0IsRUFBRSxNQUFjO1FBQ2pELE1BQU0sQ0FBQyxXQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsa0JBQWtCLEdBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFuQlEsU0FBUztRQURyQixpQkFBSyxDQUFDLHFCQUFxQixDQUFDOztPQUNoQixTQUFTLENBb0JyQjtJQUFELGdCQUFDOztDQXBCRCxBQW9CQyxDQXBCOEIsc0JBQVMsR0FvQnZDO0FBcEJZLDhCQUFTIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL2V4YW0tZ3JhZGUubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgQVBJQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5cbkBNb2RlbCgnbGl2ZWV4YW0uZXhhbV9ncmFkZScpXG5leHBvcnQgY2xhc3MgRXhhbUdyYWRlIGV4dGVuZHMgQmFzZU1vZGVse1xuXG4gICAgLy8gRGVmYXVsdCBjb25zdHJ1Y3RvciB3aWxsIGJlIGNhbGxlZCBieSBtYXBwZXJcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuXHRcdFxuXHRcdHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmV4YW1faWQgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5taW5fc2NvcmUgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5tYXhfc2NvcmUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIG5hbWU6c3RyaW5nO1xuICAgIGV4YW1faWQ6IG51bWJlcjtcbiAgICBtaW5fc2NvcmU6IG51bWJlcjtcbiAgICBtYXhfc2NvcmU6IG51bWJlcjtcblxuICAgIHN0YXRpYyBsaXN0QnlFeGFtKCBjb250ZXh0OkFQSUNvbnRleHQsIGV4YW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gRXhhbUdyYWRlLnNlYXJjaChjb250ZXh0LFtdLFwiWygnZXhhbV9pZCcsJz0nLFwiK2V4YW1JZCtcIildXCIpO1xuICAgIH1cbn1cbiJdfQ==
