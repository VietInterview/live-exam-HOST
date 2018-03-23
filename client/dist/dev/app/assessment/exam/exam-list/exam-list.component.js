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
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var exam_model_1 = require("../../../shared/models/exam.model");
var exam_dialog_component_1 = require("../exam-dialog/exam-dialog.component");
var enrollment_dialog_component_1 = require("../enrollment-dialog/enrollment-dialog.component");
var ExamListComponent = (function (_super) {
    __extends(ExamListComponent, _super);
    function ExamListComponent() {
        var _this = _super.call(this) || this;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.header = {
            left: 'prev, today, next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        return _this;
    }
    ExamListComponent.prototype.enroll = function () {
        if (this.selectedExam)
            this.examEnrollDialog.enroll(this.selectedExam);
    };
    ExamListComponent.prototype.ngOnInit = function () {
        this.loadExams();
    };
    ExamListComponent.prototype.add = function () {
        var _this = this;
        var exam = new exam_model_1.Exam();
        this.examDialog.show(exam);
        this.examDialog.onCreateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    ExamListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedExam)
            this.examDialog.show(this.selectedExam);
        this.examDialog.onUpdateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    ExamListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedExam)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedExam.delete(_this).subscribe(function () {
                        _this.loadExams();
                        _this.selectedExam = null;
                    });
                }
            });
    };
    ExamListComponent.prototype.loadExams = function () {
        var _this = this;
        exam_model_1.Exam.all(this).subscribe(function (exams) {
            _this.exams = exams;
            _this.events = _.map(exams, function (exam) {
                return {
                    title: exam.name,
                    start: exam.start,
                    send: exam.end,
                    id: exam.id,
                    allDay: true
                };
            });
        });
    };
    __decorate([
        core_1.ViewChild(exam_dialog_component_1.ExamDialog),
        __metadata("design:type", exam_dialog_component_1.ExamDialog)
    ], ExamListComponent.prototype, "examDialog", void 0);
    __decorate([
        core_1.ViewChild(enrollment_dialog_component_1.ExamEnrollDialog),
        __metadata("design:type", enrollment_dialog_component_1.ExamEnrollDialog)
    ], ExamListComponent.prototype, "examEnrollDialog", void 0);
    ExamListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exam-list',
            templateUrl: 'exam-list.component.html',
            styleUrls: ['exam-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], ExamListComponent);
    return ExamListComponent;
}(base_component_1.BaseComponent));
exports.ExamListComponent = ExamListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L2V4YW0vZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9FO0FBRXBFLGlGQUErRTtBQUcvRSw4QkFBZ0M7QUFDaEMsOERBQThFO0FBQzlFLGdFQUF5RDtBQUV6RCw4RUFBa0U7QUFDbEUsZ0dBQW9GO0FBU3BGO0lBQXVDLHFDQUFhO0lBV2hEO1FBQUEsWUFDSSxpQkFBTyxTQU1WO1FBVEQsaUJBQVcsR0FBSSx1QkFBVyxDQUFDO1FBSXZCLEtBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLDRCQUE0QjtTQUN0QyxDQUFDOztJQUNOLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsK0JBQUcsR0FBSDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFBQSxpQkFNQztRQUxHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO2dCQUNsRSxNQUFNLEVBQUU7b0JBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUNyQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFBQSxpQkFhQztRQVpHLGlCQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUk7Z0JBQzVCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDWCxNQUFNLEVBQUUsSUFBSTtpQkFDZixDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0RXNCO1FBQXRCLGdCQUFTLENBQUMsa0NBQVUsQ0FBQztrQ0FBYSxrQ0FBVTt5REFBQztJQUNqQjtRQUE1QixnQkFBUyxDQUFDLDhDQUFnQixDQUFDO2tDQUFtQiw4Q0FBZ0I7K0RBQUM7SUFIdkQsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGlCQUFpQixDQTBFN0I7SUFBRCx3QkFBQztDQTFFRCxBQTBFQyxDQTFFc0MsOEJBQWEsR0EwRW5EO0FBMUVZLDhDQUFpQiIsImZpbGUiOiJhcHAvYXNzZXNzbWVudC9leGFtL2V4YW0tbGlzdC9leGFtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZLCBFWEFNX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgRXhhbURpYWxvZyB9IGZyb20gJy4uL2V4YW0tZGlhbG9nL2V4YW0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtRW5yb2xsRGlhbG9nIH0gZnJvbSAnLi4vZW5yb2xsbWVudC1kaWFsb2cvZW5yb2xsbWVudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdleGFtLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnZXhhbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZXhhbS1saXN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbUxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoRXhhbURpYWxvZykgZXhhbURpYWxvZzogRXhhbURpYWxvZztcbiAgICBAVmlld0NoaWxkKEV4YW1FbnJvbGxEaWFsb2cpIGV4YW1FbnJvbGxEaWFsb2c6IEV4YW1FbnJvbGxEaWFsb2c7XG5cbiAgICBzZWxlY3RlZEV4YW06IEV4YW07XG4gICAgZXhhbXM6IEV4YW1bXTtcbiAgICBldmVudHM6IGFueVtdO1xuICAgIGhlYWRlcjogYW55O1xuICAgIEVYQU1fU1RBVFVTID0gIEVYQU1fU1RBVFVTO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0ge1xuICAgICAgICAgICAgbGVmdDogJ3ByZXYsIHRvZGF5LCBuZXh0JyxcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlayxhZ2VuZGFEYXknXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZW5yb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEV4YW0pXG4gICAgICAgICAgICB0aGlzLmV4YW1FbnJvbGxEaWFsb2cuZW5yb2xsKHRoaXMuc2VsZWN0ZWRFeGFtKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRXhhbXMoKTtcbiAgICB9XG5cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdmFyIGV4YW0gPSBuZXcgRXhhbSgpO1xuICAgICAgICB0aGlzLmV4YW1EaWFsb2cuc2hvdyhleGFtKTtcbiAgICAgICAgdGhpcy5leGFtRGlhbG9nLm9uQ3JlYXRlQ29tcGxldGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEV4YW1zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRXhhbSlcbiAgICAgICAgICAgIHRoaXMuZXhhbURpYWxvZy5zaG93KHRoaXMuc2VsZWN0ZWRFeGFtKTtcbiAgICAgICAgdGhpcy5leGFtRGlhbG9nLm9uVXBkYXRlQ29tcGxldGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEV4YW1zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFeGFtKVxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBcmUgeW91IHN1cmUgdG8gZGVsZXRlID8nKSxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV4YW0uZGVsZXRlKHRoaXMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRFeGFtcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV4YW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRFeGFtcygpIHtcbiAgICAgICAgRXhhbS5hbGwodGhpcykuc3Vic2NyaWJlKGV4YW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhhbXMgPSBleGFtcztcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gXy5tYXAoZXhhbXMsIChleGFtKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXhhbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZXhhbS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc2VuZDogZXhhbS5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBleGFtLmlkLFxuICAgICAgICAgICAgICAgICAgICBhbGxEYXk6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19
