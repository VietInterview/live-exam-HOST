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
var _ = require("underscore");
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        var _this = _super.call(this) || this;
        _this.title = undefined;
        _this.content = undefined;
        _this.explanation = undefined;
        _this.type = undefined;
        _this.level = undefined;
        _this.group_id = undefined;
        return _this;
    }
    Question_1 = Question;
    Question.listByGroup = function (context, groupId) {
        return Question_1.search(context, [], "[('group_id','='," + groupId + ")]");
    };
    Question.listByGroups = function (context, groupIds) {
        var subscriptions = [];
        _.each(groupIds, function (groupId) {
            subscriptions.push(Question_1.listByGroup(context, groupId));
        });
        return Rx_1.Observable.zip.apply(Rx_1.Observable, subscriptions).map(function (questionArrs) {
            return _.flatten(questionArrs);
        });
    };
    Question = Question_1 = __decorate([
        decorator_1.Model('liveexam.question'),
        __metadata("design:paramtypes", [])
    ], Question);
    return Question;
    var Question_1;
}(base_model_1.BaseModel));
exports.Question = Question;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3F1ZXN0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUF5QztBQUN6Qyw4QkFBOEM7QUFDOUMseUNBQW9DO0FBRXBDLDhCQUFnQztBQUdoQztJQUE4Qiw0QkFBUztJQUduQztRQUFBLFlBQ0ksaUJBQU8sU0FRYjtRQU5BLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDOztJQUNqQyxDQUFDO2lCQVpXLFFBQVE7SUFxQlYsb0JBQVcsR0FBbEIsVUFBbUIsT0FBa0IsRUFBRSxPQUFPO1FBQzFDLE1BQU0sQ0FBQyxVQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUUsbUJBQW1CLEdBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxxQkFBWSxHQUFuQixVQUFvQixPQUFrQixFQUFFLFFBQVE7UUFDNUMsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsT0FBTztZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsZUFBVSxDQUFDLEdBQUcsT0FBZCxlQUFVLEVBQVEsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFBLFlBQVk7WUFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakNRLFFBQVE7UUFEcEIsaUJBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7T0FDZCxRQUFRLENBbUNwQjtJQUFELGVBQUM7O0NBbkNELEFBbUNDLENBbkM2QixzQkFBUyxHQW1DdEM7QUFuQ1ksNEJBQVEiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvcXVlc3Rpb24ubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgQVBJQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5ATW9kZWwoJ2xpdmVleGFtLnF1ZXN0aW9uJylcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbiBleHRlbmRzIEJhc2VNb2RlbHtcblxuICAgIC8vIERlZmF1bHQgY29uc3RydWN0b3Igd2lsbCBiZSBjYWxsZWQgYnkgbWFwcGVyXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLnRpdGxlID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuY29udGVudCA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmV4cGxhbmF0aW9uID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ncm91cF9pZCA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgdGl0bGU6c3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBleHBsYW5hdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBsZXZlbDogc3RyaW5nO1xuICAgIGdyb3VwX2lkOiBudW1iZXI7XG5cbiAgICBzdGF0aWMgbGlzdEJ5R3JvdXAoY29udGV4dDpBUElDb250ZXh0LCBncm91cElkKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gUXVlc3Rpb24uc2VhcmNoKGNvbnRleHQsW10sIFwiWygnZ3JvdXBfaWQnLCc9JyxcIitncm91cElkK1wiKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3RCeUdyb3Vwcyhjb250ZXh0OkFQSUNvbnRleHQsIGdyb3VwSWRzKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICBfLmVhY2goZ3JvdXBJZHMsIChncm91cElkKT0+IHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChRdWVzdGlvbi5saXN0QnlHcm91cChjb250ZXh0LGdyb3VwSWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnppcCguLi5zdWJzY3JpcHRpb25zKS5tYXAocXVlc3Rpb25BcnJzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfLmZsYXR0ZW4ocXVlc3Rpb25BcnJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=
