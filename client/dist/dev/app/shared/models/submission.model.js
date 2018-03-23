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
var Submission = (function (_super) {
    __extends(Submission, _super);
    function Submission() {
        var _this = _super.call(this) || this;
        _this.user_id = undefined;
        _this.member_id = undefined;
        _this.exam_id = undefined;
        _this.end = undefined;
        _this.start = undefined;
        return _this;
    }
    Submission_1 = Submission;
    Submission.byUser = function (context, userId) {
        return Submission_1.search(context, [], "[('user_id','='," + userId + ")]").map(function (submits) {
            if (submits.length)
                return submits[0];
            else
                return null;
        });
    };
    Submission.byMember = function (context, member_id) {
        return Submission_1.search(context, [], "[('member_id','='," + member_id + ")]").map(function (submits) {
            if (submits.length)
                return submits[0];
            else
                return null;
        });
    };
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], Submission.prototype, "end", void 0);
    __decorate([
        decorator_1.FieldProperty(),
        __metadata("design:type", Date)
    ], Submission.prototype, "start", void 0);
    Submission = Submission_1 = __decorate([
        decorator_1.Model('liveexam.submission'),
        __metadata("design:paramtypes", [])
    ], Submission);
    return Submission;
    var Submission_1;
}(base_model_1.BaseModel));
exports.Submission = Submission;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3N1Ym1pc3Npb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBRXpDLHlDQUFtRDtBQUluRDtJQUFnQyw4QkFBUztJQUdyQztRQUFBLFlBQ0ksaUJBQU8sU0FPYjtRQUxNLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDOztJQUM5QixDQUFDO21CQVhXLFVBQVU7SUFvQlosaUJBQU0sR0FBYixVQUFlLE9BQWtCLEVBQUUsTUFBYztRQUM3QyxNQUFNLENBQUMsWUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQzNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sbUJBQVEsR0FBZixVQUFpQixPQUFrQixFQUFFLFNBQWlCO1FBQ2xELE1BQU0sQ0FBQyxZQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsb0JBQW9CLEdBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDaEYsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUk7Z0JBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQkQ7UUFEQyx5QkFBYSxFQUFRO2tDQUNqQixJQUFJOzJDQUFDO0lBRVY7UUFEQyx5QkFBYSxFQUFRO2tDQUNmLElBQUk7NkNBQUM7SUFsQkgsVUFBVTtRQUR0QixpQkFBSyxDQUFDLHFCQUFxQixDQUFDOztPQUNoQixVQUFVLENBcUN0QjtJQUFELGlCQUFDOztDQXJDRCxBQXFDQyxDQXJDK0Isc0JBQVMsR0FxQ3hDO0FBckNZLGdDQUFVIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL3N1Ym1pc3Npb24ubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsLCBGaWVsZFByb3BlcnR5IH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgQVBJQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5cbkBNb2RlbCgnbGl2ZWV4YW0uc3VibWlzc2lvbicpXG5leHBvcnQgY2xhc3MgU3VibWlzc2lvbiBleHRlbmRzIEJhc2VNb2RlbHtcblxuICAgIC8vIERlZmF1bHQgY29uc3RydWN0b3Igd2lsbCBiZSBjYWxsZWQgYnkgbWFwcGVyXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcblx0XHRcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1lbWJlcl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5leGFtX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVuZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHVuZGVmaW5lZDtcblx0fVxuICAgIGV4YW1faWQ6IG51bWJlcjtcbiAgICB1c2VyX2lkOiBudW1iZXI7XG4gICAgbWVtYmVyX2lkOiBudW1iZXI7XG4gICAgQEZpZWxkUHJvcGVydHk8RGF0ZT4oKVxuICAgIGVuZDogRGF0ZTtcbiAgICBARmllbGRQcm9wZXJ0eTxEYXRlPigpXG4gICAgc3RhcnQ6IERhdGU7XG5cbiAgICBzdGF0aWMgYnlVc2VyKCBjb250ZXh0OkFQSUNvbnRleHQsIHVzZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFN1Ym1pc3Npb24uc2VhcmNoKGNvbnRleHQsW10sXCJbKCd1c2VyX2lkJywnPScsXCIrdXNlcklkK1wiKV1cIikubWFwKHN1Ym1pdHMgPT57XG4gICAgICAgICAgICBpZiAoc3VibWl0cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Ym1pdHNbMF07XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBieU1lbWJlciggY29udGV4dDpBUElDb250ZXh0LCBtZW1iZXJfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBTdWJtaXNzaW9uLnNlYXJjaChjb250ZXh0LFtdLFwiWygnbWVtYmVyX2lkJywnPScsXCIrbWVtYmVyX2lkK1wiKV1cIikubWFwKHN1Ym1pdHMgPT57XG4gICAgICAgICAgICBpZiAoc3VibWl0cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Ym1pdHNbMF07XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
