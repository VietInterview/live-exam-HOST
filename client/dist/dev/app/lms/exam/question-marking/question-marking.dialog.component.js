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
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var QuestionMarkingDialog = (function (_super) {
    __extends(QuestionMarkingDialog, _super);
    function QuestionMarkingDialog() {
        var _this = _super.call(this) || this;
        _this.onMarkCompleteReceiver = new Rx_1.Subject();
        _this.onMarkComplete = _this.onMarkCompleteReceiver.asObservable();
        _this.display = false;
        _this.answers = [];
        _this.questions = {};
        _this.member = new exam_member_model_1.ExamMember();
        return _this;
    }
    QuestionMarkingDialog.prototype.show = function (member, answers) {
        var _this = this;
        this.display = true;
        exam_question_model_1.ExamQuestion.listByExam(this, member.exam_id).subscribe(function (questions) {
            _this.questions = {};
            _.each(questions, function (question) {
                _this.questions[question.question_id] = question;
            });
            _this.member = member;
            _this.answers = answers;
        });
    };
    QuestionMarkingDialog.prototype.hide = function () {
        this.display = false;
    };
    QuestionMarkingDialog.prototype.save = function () {
        var _this = this;
        var subscrptions = _.map(this.answers, function (answer) {
            return answer.save(_this);
        });
        Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscrptions).subscribe(function () {
            _this.messageService.add({ severity: 'success', summary: 'Marking', detail: 'Marking saved sucessfully' });
            _this.onMarkCompleteReceiver.next();
            _this.hide();
        });
    };
    QuestionMarkingDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question-marking-dialog',
            templateUrl: 'question-marking.dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], QuestionMarkingDialog);
    return QuestionMarkingDialog;
}(base_component_1.BaseComponent));
exports.QuestionMarkingDialog = QuestionMarkingDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9xdWVzdGlvbi1tYXJraW5nL3F1ZXN0aW9uLW1hcmtpbmcuZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkY7QUFDN0YsOEJBQThDO0FBQzlDLGlGQUErRTtBQUcvRSw4QkFBZ0M7QUFNaEMsa0ZBQTBFO0FBQzFFLDhFQUFzRTtBQVN0RTtJQUEyQyx5Q0FBYTtJQVV2RDtRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQVZPLDRCQUFzQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQzFELG9CQUFjLEdBQW9CLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUsvRSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFJLENBQUMsTUFBTSxHQUFJLElBQUksOEJBQVUsRUFBRSxDQUFDOztJQUNqQyxDQUFDO0lBRUQsb0NBQUksR0FBSixVQUFLLE1BQWtCLEVBQUUsT0FBaUI7UUFBMUMsaUJBVUM7UUFUQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixrQ0FBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDaEUsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQyxRQUFRO2dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBSSxRQUFRLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFBQSxpQkFTQztRQVJBLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07WUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFVLENBQUMsUUFBUSxPQUFuQixlQUFVLEVBQWEsWUFBWSxFQUFFLFNBQVMsQ0FBQztZQUM5QyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQyxDQUFDO1lBQ3RHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUEzQ1cscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsd0NBQXdDO1NBQ3JELENBQUM7O09BQ1cscUJBQXFCLENBNENqQztJQUFELDRCQUFDO0NBNUNELEFBNENDLENBNUMwQyw4QkFBYSxHQTRDdkQ7QUE1Q1ksc0RBQXFCIiwiZmlsZSI6ImFwcC9sbXMvZXhhbS9xdWVzdGlvbi1tYXJraW5nL3F1ZXN0aW9uLW1hcmtpbmcuZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZLCBFWEFNX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zdWJtaXNzaW9uLm1vZGVsJztcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdxdWVzdGlvbi1tYXJraW5nLWRpYWxvZycsXG5cdHRlbXBsYXRlVXJsOiAncXVlc3Rpb24tbWFya2luZy5kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hcmtpbmdEaWFsb2cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRkaXNwbGF5OiBib29sZWFuO1xuXHRhbnN3ZXJzOiBBbnN3ZXJbXTtcblx0cXVlc3Rpb25zOiBhbnk7XG5cdG1lbWJlcjogRXhhbU1lbWJlcjtcblx0cHJpdmF0ZSBvbk1hcmtDb21wbGV0ZVJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uTWFya0NvbXBsZXRlOk9ic2VydmFibGU8YW55PiA9ICB0aGlzLm9uTWFya0NvbXBsZXRlUmVjZWl2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHRcdHRoaXMuYW5zd2VycyA9IFtdO1xuXHRcdHRoaXMucXVlc3Rpb25zID0ge307XG5cdFx0dGhpcy5tZW1iZXIgPSAgbmV3IEV4YW1NZW1iZXIoKTtcblx0fVxuXG5cdHNob3cobWVtYmVyOiBFeGFtTWVtYmVyLCBhbnN3ZXJzOiBBbnN3ZXJbXSkge1xuXHRcdHRoaXMuZGlzcGxheSA9IHRydWU7XG5cdFx0RXhhbVF1ZXN0aW9uLmxpc3RCeUV4YW0odGhpcywgbWVtYmVyLmV4YW1faWQpLnN1YnNjcmliZShxdWVzdGlvbnMgPT4ge1xuXHRcdFx0dGhpcy5xdWVzdGlvbnMgPSB7fTtcblx0XHRcdF8uZWFjaChxdWVzdGlvbnMsIChxdWVzdGlvbik9PiB7XG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zW3F1ZXN0aW9uLnF1ZXN0aW9uX2lkXSA9ICBxdWVzdGlvbjtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5tZW1iZXIgPSBtZW1iZXI7XG5cdFx0XHR0aGlzLmFuc3dlcnMgPSBhbnN3ZXJzO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0fVxuXG5cdHNhdmUoKSB7XG5cdFx0dmFyIHN1YnNjcnB0aW9ucyA9IF8ubWFwKHRoaXMuYW5zd2VycywgKGFuc3dlcik9PiB7XG5cdFx0XHRyZXR1cm4gYW5zd2VyLnNhdmUodGhpcyk7XG5cdFx0fSk7XG5cdFx0T2JzZXJ2YWJsZS5mb3JrSm9pbiguLi5zdWJzY3JwdGlvbnMpLnN1YnNjcmliZSgoKT0+IHtcblx0XHRcdHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtzZXZlcml0eTonc3VjY2VzcycsIHN1bW1hcnk6J01hcmtpbmcnLCBkZXRhaWw6ICdNYXJraW5nIHNhdmVkIHN1Y2Vzc2Z1bGx5J30pO1xuXHRcdFx0dGhpcy5vbk1hcmtDb21wbGV0ZVJlY2VpdmVyLm5leHQoKTtcblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG59Il19
