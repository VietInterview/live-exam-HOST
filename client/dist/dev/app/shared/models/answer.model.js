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
var Answer = (function (_super) {
    __extends(Answer, _super);
    function Answer() {
        var _this = _super.call(this) || this;
        _this.question_id = undefined;
        _this.option_id = undefined;
        _this.is_correct = undefined;
        _this.submission_id = undefined;
        _this.text = undefined;
        _this.score = undefined;
        return _this;
    }
    Answer_1 = Answer;
    Answer.listBySubmit = function (context, submitId) {
        return Answer_1.search(context, [], "[('submission_id','='," + submitId + ")]");
    };
    Answer = Answer_1 = __decorate([
        decorator_1.Model('liveexam.answer'),
        __metadata("design:paramtypes", [])
    ], Answer);
    return Answer;
    var Answer_1;
}(base_model_1.BaseModel));
exports.Answer = Answer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBeUM7QUFFekMseUNBQWtEO0FBSWxEO0lBQTRCLDBCQUFTO0lBR2pDO1FBQUEsWUFDSSxpQkFBTyxTQVFiO1FBTk0sS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7O0lBQzlCLENBQUM7ZUFaVyxNQUFNO0lBcUJSLG1CQUFZLEdBQW5CLFVBQXFCLE9BQWtCLEVBQUUsUUFBZ0I7UUFDckQsTUFBTSxDQUFDLFFBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyx3QkFBd0IsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQXZCUSxNQUFNO1FBRGxCLGlCQUFLLENBQUMsaUJBQWlCLENBQUM7O09BQ1osTUFBTSxDQXlCbEI7SUFBRCxhQUFDOztDQXpCRCxBQXlCQyxDQXpCMkIsc0JBQVMsR0F5QnBDO0FBekJZLHdCQUFNIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdST1VQX0NBVEVHT1JZfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTW9kZWwsRmllbGRQcm9wZXJ0eSB9IGZyb20gJy4vZGVjb3JhdG9yJztcbmltcG9ydCB7IEFQSUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuXG5ATW9kZWwoJ2xpdmVleGFtLmFuc3dlcicpXG5leHBvcnQgY2xhc3MgQW5zd2VyIGV4dGVuZHMgQmFzZU1vZGVse1xuXG4gICAgLy8gRGVmYXVsdCBjb25zdHJ1Y3RvciB3aWxsIGJlIGNhbGxlZCBieSBtYXBwZXJcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuXHRcdFxuICAgICAgICB0aGlzLnF1ZXN0aW9uX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9wdGlvbl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc19jb3JyZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN1Ym1pc3Npb25faWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zY29yZSA9IHVuZGVmaW5lZDtcblx0fVxuICAgIHF1ZXN0aW9uX2lkOiBudW1iZXI7XG4gICAgb3B0aW9uX2lkOiBudW1iZXI7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBpc19jb3JyZWN0OiBib29sZWFuO1xuICAgIHN1Ym1pc3Npb25faWQ6IG51bWJlcjtcbiAgICB0ZXh0OnN0cmluZztcblxuXG4gICAgc3RhdGljIGxpc3RCeVN1Ym1pdCggY29udGV4dDpBUElDb250ZXh0LCBzdWJtaXRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gQW5zd2VyLnNlYXJjaChjb250ZXh0LFtdLFwiWygnc3VibWlzc2lvbl9pZCcsJz0nLFwiK3N1Ym1pdElkK1wiKV1cIik7XG4gICAgfVxuXG59XG4iXX0=
