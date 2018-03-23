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
var base_component_1 = require("../../shared/components/base/base.component");
var _ = require("underscore");
var constants_1 = require("../../shared/models/constants");
var exam_model_1 = require("../../shared/models/exam.model");
var exam_dialog_component_1 = require("../../assessment/exam/exam-dialog/exam-dialog.component");
var AdminDashboardComponent = (function (_super) {
    __extends(AdminDashboardComponent, _super);
    function AdminDashboardComponent() {
        var _this = _super.call(this) || this;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.header = {
            left: 'prev, today, next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        return _this;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.loadExams();
    };
    AdminDashboardComponent.prototype.add = function () {
        var _this = this;
        var exam = new exam_model_1.Exam();
        this.examDialog.show(exam);
        this.examDialog.onCreateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    AdminDashboardComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedExam)
            this.examDialog.show(this.selectedExam);
        this.examDialog.onUpdateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    AdminDashboardComponent.prototype.onDayClick = function () {
        this.add();
    };
    AdminDashboardComponent.prototype.onEventClick = function (event) {
        var examId = event.calEvent.id;
        this.selectedExam = _.find(this.exams, function (exam) {
            return exam.id == examId;
        });
        this.edit();
    };
    AdminDashboardComponent.prototype.loadExams = function () {
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
    ], AdminDashboardComponent.prototype, "examDialog", void 0);
    AdminDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-dashboard',
            templateUrl: 'admin-dashboard.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}(base_component_1.BaseComponent));
exports.AdminDashboardComponent = AdminDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9FO0FBRXBFLDhFQUE0RTtBQUc1RSw4QkFBZ0M7QUFDaEMsMkRBQTJFO0FBQzNFLDZEQUFzRDtBQUV0RCxpR0FBcUY7QUFTckY7SUFBNkMsMkNBQWE7SUFVdEQ7UUFBQSxZQUNJLGlCQUFPLFNBTVY7UUFURCxpQkFBVyxHQUFJLHVCQUFXLENBQUM7UUFJdkIsS0FBSSxDQUFDLE1BQU0sR0FBRztZQUNWLElBQUksRUFBRSxtQkFBbUI7WUFDekIsTUFBTSxFQUFFLE9BQU87WUFDZixLQUFLLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7O0lBQ04sQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdELHFDQUFHLEdBQUg7UUFBQSxpQkFNQztRQUxHLElBQUksSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBSSxHQUFKO1FBQUEsaUJBTUM7UUFMRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDJDQUFTLEdBQVQ7UUFBQSxpQkFhQztRQVpHLGlCQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUk7Z0JBQzVCLE1BQU0sQ0FBQztvQkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDWCxNQUFNLEVBQUUsSUFBSTtpQkFDZixDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvRHNCO1FBQXRCLGdCQUFTLENBQUMsa0NBQVUsQ0FBQztrQ0FBYSxrQ0FBVTsrREFBQztJQUZyQyx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FFaEQsQ0FBQzs7T0FDVyx1QkFBdUIsQ0FxRW5DO0lBQUQsOEJBQUM7Q0FyRUQsQUFxRUMsQ0FyRTRDLDhCQUFhLEdBcUV6RDtBQXJFWSwwREFBdUIiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBHUk9VUF9DQVRFR09SWSwgRVhBTV9TVEFUVVMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcbmltcG9ydCB7IEV4YW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEV4YW1EaWFsb2cgfSBmcm9tICcuLi8uLi9hc3Nlc3NtZW50L2V4YW0vZXhhbS1kaWFsb2cvZXhhbS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhZG1pbi1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJ1xuXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKEV4YW1EaWFsb2cpIGV4YW1EaWFsb2c6IEV4YW1EaWFsb2c7XG5cbiAgICBzZWxlY3RlZEV4YW06IEV4YW07XG4gICAgZXhhbXM6IEV4YW1bXTtcbiAgICBldmVudHM6IGFueVtdO1xuICAgIGhlYWRlcjogYW55O1xuICAgIEVYQU1fU1RBVFVTID0gIEVYQU1fU1RBVFVTO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0ge1xuICAgICAgICAgICAgbGVmdDogJ3ByZXYsIHRvZGF5LCBuZXh0JyxcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlayxhZ2VuZGFEYXknXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEV4YW1zKCk7XG4gICAgfVxuXG5cbiAgICBhZGQoKSB7XG4gICAgICAgIHZhciBleGFtID0gbmV3IEV4YW0oKTtcbiAgICAgICAgdGhpcy5leGFtRGlhbG9nLnNob3coZXhhbSk7XG4gICAgICAgIHRoaXMuZXhhbURpYWxvZy5vbkNyZWF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRFeGFtcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlZGl0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEV4YW0pXG4gICAgICAgICAgICB0aGlzLmV4YW1EaWFsb2cuc2hvdyh0aGlzLnNlbGVjdGVkRXhhbSk7XG4gICAgICAgIHRoaXMuZXhhbURpYWxvZy5vblVwZGF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRFeGFtcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRheUNsaWNrKCkge1xuICAgICAgICB0aGlzLmFkZCgpO1xuICAgIH1cblxuICAgIG9uRXZlbnRDbGljayhldmVudCkge1xuICAgICAgICB2YXIgZXhhbUlkID0gZXZlbnQuY2FsRXZlbnQuaWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFeGFtID0gXy5maW5kKHRoaXMuZXhhbXMsIChleGFtKT0+IHtcbiAgICAgICAgICAgIHJldHVybiBleGFtLmlkID09IGV4YW1JZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRpdCgpO1xuICAgIH1cblxuICAgIGxvYWRFeGFtcygpIHtcbiAgICAgICAgRXhhbS5hbGwodGhpcykuc3Vic2NyaWJlKGV4YW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhhbXMgPSBleGFtcztcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gXy5tYXAoZXhhbXMsIChleGFtKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXhhbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZXhhbS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgc2VuZDogZXhhbS5lbmQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBleGFtLmlkLFxuICAgICAgICAgICAgICAgICAgICBhbGxEYXk6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbn1cblxuIl19
