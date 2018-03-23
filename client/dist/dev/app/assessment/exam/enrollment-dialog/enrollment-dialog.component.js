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
var Observable_1 = require("rxjs/Observable");
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var constants_1 = require("../../../shared/models/constants");
var _ = require("underscore");
var select_student_dialog_component_1 = require("../../../shared/components/select-student-dialog/select-student-dialog.component");
var select_teacher_dialog_component_1 = require("../../../shared/components/select-teacher-dialog/select-teacher-dialog.component");
var ExamEnrollDialog = (function (_super) {
    __extends(ExamEnrollDialog, _super);
    function ExamEnrollDialog() {
        var _this = _super.call(this) || this;
        _this.EXAM_MEMBER_ROLE = constants_1.EXAM_MEMBER_ROLE;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.EXAM_MEMBER_STATUS = constants_1.EXAM_MEMBER_STATUS;
        return _this;
    }
    ExamEnrollDialog.prototype.enroll = function (exam) {
        this.display = true;
        this.processing = false;
        this.exam = exam;
        this.loadMembers();
    };
    ExamEnrollDialog.prototype.hide = function () {
        this.display = false;
    };
    ExamEnrollDialog.prototype.add = function (role) {
        var _this = this;
        var usersDialog = role == 'teacher' ? this.teachersDialog : this.studentsDialog;
        usersDialog.show();
        usersDialog.onSelectUsers.subscribe(function (users) {
            _this.processing = true;
            var subscriptions = [];
            _.each(users, function (user) {
                var member = new exam_member_model_1.ExamMember();
                member.exam_id = _this.exam.id;
                member.user_id = user.id;
                member.date_register = new Date();
                member.status = 'active';
                subscriptions.push(member.save(_this));
            });
            Observable_1.Observable.forkJoin.apply(Observable_1.Observable, subscriptions).subscribe(function () {
                _this.processing = false;
                _this.loadMembers();
            });
        });
    };
    ExamEnrollDialog.prototype.delete = function (member) {
        var _this = this;
        if (member)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    member.delete(_this).subscribe(function () {
                        _this.selectedCandidate = null;
                        _this.selectedSupervisor = null;
                        _this.loadMembers();
                    });
                }
            });
    };
    ExamEnrollDialog.prototype.loadMembers = function () {
        var _this = this;
        exam_member_model_1.ExamMember.listByExam(this, this.exam.id).subscribe(function (members) {
            _this.students = _.filter(members, function (member) {
                return member.role == 'student';
            });
            _this.teachers = _.filter(members, function (member) {
                return member.role == 'teacher';
            });
        });
    };
    __decorate([
        core_1.ViewChild(select_student_dialog_component_1.SelectStudentsDialog),
        __metadata("design:type", select_student_dialog_component_1.SelectStudentsDialog)
    ], ExamEnrollDialog.prototype, "studentsDialog", void 0);
    __decorate([
        core_1.ViewChild(select_teacher_dialog_component_1.SelectTeachersDialog),
        __metadata("design:type", select_teacher_dialog_component_1.SelectTeachersDialog)
    ], ExamEnrollDialog.prototype, "teachersDialog", void 0);
    ExamEnrollDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exam-enrollment-dialog',
            templateUrl: 'enrollment-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ExamEnrollDialog);
    return ExamEnrollDialog;
}(base_dialog_1.BaseDialog));
exports.ExamEnrollDialog = ExamEnrollDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L2V4YW0vZW5yb2xsbWVudC1kaWFsb2cvZW5yb2xsbWVudC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRTtBQUNsRSw4Q0FBZ0Q7QUFLaEQsMkVBQXlFO0FBRXpFLDhFQUFzRTtBQUV0RSw4REFBeUg7QUFFekgsOEJBQWdDO0FBRWhDLG9JQUF3SDtBQUN4SCxvSUFBd0g7QUFPeEg7SUFBc0Msb0NBQWtCO0lBZ0J2RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQVRFLHNCQUFnQixHQUFHLDRCQUFnQixDQUFDO1FBQ3BDLGlCQUFXLEdBQUksdUJBQVcsQ0FBQztRQUMzQix3QkFBa0IsR0FBRyw4QkFBa0IsQ0FBQzs7SUFPM0MsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxJQUFTO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdBLDhCQUFHLEdBQUgsVUFBSSxJQUFXO1FBQWYsaUJBbUJHO1FBbEJHLElBQUksV0FBVyxHQUFHLElBQUksSUFBRSxTQUFTLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0UsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFTO2dCQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLDhCQUFVLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN6QixNQUFNLENBQUMsYUFBYSxHQUFJLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILHVCQUFVLENBQUMsUUFBUSxPQUFuQix1QkFBVSxFQUFhLGFBQWEsRUFBRSxTQUFTLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sTUFBaUI7UUFBeEIsaUJBWUM7UUFYRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDO2dCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztnQkFDbEUsTUFBTSxFQUFFO29CQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUMxQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3dCQUM5QixLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO3dCQUMvQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7YUFDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkcsOEJBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUN0RCxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTTtnQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUcsU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07Z0JBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFHLFNBQVMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9EZ0M7UUFBaEMsZ0JBQVMsQ0FBQyxzREFBb0IsQ0FBQztrQ0FBaUIsc0RBQW9COzREQUFDO0lBQ3hDO1FBQWhDLGdCQUFTLENBQUMsc0RBQW9CLENBQUM7a0NBQWlCLHNEQUFvQjs0REFBQztJQWQxRCxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxrQ0FBa0M7U0FDL0MsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0E2RTVCO0lBQUQsdUJBQUM7Q0E3RUQsQUE2RUMsQ0E3RXFDLHdCQUFVLEdBNkUvQztBQTdFWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2Fzc2Vzc21lbnQvZXhhbS9lbnJvbGxtZW50LWRpYWxvZy9lbnJvbGxtZW50LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGV9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZURpYWxvZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5kaWFsb2cnO1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtTWVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9leGFtLW1lbWJlci5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgREVGQVVMVF9EQVRFX0xPQ0FMRSwgRVhBTV9TVEFUVVMsIEVYQU1fTUVNQkVSX1JPTEUsIEVYQU1fTUVNQkVSX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtTZWxlY3RJdGVtLCBNZW51SXRlbX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEV4YW1NZW1iZXJEaWFsb2cgfSBmcm9tICcuLi9tZW1iZXItZGlhbG9nL21lbWJlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdFN0dWRlbnRzRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0LXN0dWRlbnQtZGlhbG9nL3NlbGVjdC1zdHVkZW50LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0VGVhY2hlcnNEaWFsb2cgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtdGVhY2hlci1kaWFsb2cvc2VsZWN0LXRlYWNoZXItZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2V4YW0tZW5yb2xsbWVudC1kaWFsb2cnLFxuXHR0ZW1wbGF0ZVVybDogJ2Vucm9sbG1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbUVucm9sbERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2c8Q291cnNlPiB7XG5cblx0ZGlzcGxheTogYm9vbGVhbjtcblx0cHJvY2Vzc2luZzogYm9vbGVhbjtcblx0ZXhhbTogRXhhbTtcbiAgICBjYW5kaWRhdGVzOiBFeGFtTWVtYmVyW107XG4gICAgc2VsZWN0ZWRDYW5kaWRhdGU6IEV4YW1NZW1iZXI7XG4gICAgc3VwZXJ2aXNvcnM6IEV4YW1NZW1iZXJbXTtcbiAgICBzZWxlY3RlZFN1cGVydmlzb3I6IEV4YW1NZW1iZXI7XG4gICAgRVhBTV9NRU1CRVJfUk9MRSA9IEVYQU1fTUVNQkVSX1JPTEU7XG4gICAgRVhBTV9TVEFUVVMgPSAgRVhBTV9TVEFUVVM7XG4gICAgRVhBTV9NRU1CRVJfU1RBVFVTID0gRVhBTV9NRU1CRVJfU1RBVFVTO1xuXG4gICAgQFZpZXdDaGlsZChTZWxlY3RTdHVkZW50c0RpYWxvZykgc3R1ZGVudHNEaWFsb2c6IFNlbGVjdFN0dWRlbnRzRGlhbG9nO1xuXHRAVmlld0NoaWxkKFNlbGVjdFRlYWNoZXJzRGlhbG9nKSB0ZWFjaGVyc0RpYWxvZzogU2VsZWN0VGVhY2hlcnNEaWFsb2c7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGVucm9sbChleGFtOkV4YW0pIHtcblx0XHR0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXHRcdHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuZXhhbSA9IGV4YW07XG5cdFx0dGhpcy5sb2FkTWVtYmVycygpO1xuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0fVxuXG5cblx0IGFkZChyb2xlOnN0cmluZykge1xuICAgICAgICB2YXIgdXNlcnNEaWFsb2cgPSByb2xlPT0ndGVhY2hlcic/IHRoaXMudGVhY2hlcnNEaWFsb2cgOiB0aGlzLnN0dWRlbnRzRGlhbG9nO1xuICAgICAgICB1c2Vyc0RpYWxvZy5zaG93KCk7XG4gICAgICAgIHVzZXJzRGlhbG9nLm9uU2VsZWN0VXNlcnMuc3Vic2NyaWJlKHVzZXJzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAgICAgXy5lYWNoKHVzZXJzLCAodXNlcjpVc2VyKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gbmV3IEV4YW1NZW1iZXIoKTtcbiAgICAgICAgICAgICAgICBtZW1iZXIuZXhhbV9pZCA9IHRoaXMuZXhhbS5pZDtcbiAgICAgICAgICAgICAgICBtZW1iZXIudXNlcl9pZCA9IHVzZXIuaWQ7XG4gICAgICAgICAgICAgICAgbWVtYmVyLmRhdGVfcmVnaXN0ZXIgPSAgbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBtZW1iZXIuc3RhdHVzID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKG1lbWJlci5zYXZlKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JzZXJ2YWJsZS5mb3JrSm9pbiguLi5zdWJzY3JpcHRpb25zKS5zdWJzY3JpYmUoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVtYmVycygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZShtZW1iZXI6RXhhbU1lbWJlcikge1xuICAgICAgICBpZiAobWVtYmVyKVxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBcmUgeW91IHN1cmUgdG8gZGVsZXRlID8nKSxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLmRlbGV0ZSh0aGlzKS5zdWJzY3JpYmUoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FuZGlkYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdXBlcnZpc29yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lbWJlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkTWVtYmVycygpIHtcbiAgICAgICAgRXhhbU1lbWJlci5saXN0QnlFeGFtKHRoaXMsIHRoaXMuZXhhbS5pZCkuc3Vic2NyaWJlKG1lbWJlcnMgPT4ge1xuICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBfLmZpbHRlcihtZW1iZXJzLCAobWVtYmVyKT0+IHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5yb2xlID09J3N0dWRlbnQnO1xuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIHRoaXMudGVhY2hlcnMgPSBfLmZpbHRlcihtZW1iZXJzLCAobWVtYmVyKT0+IHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5yb2xlID09J3RlYWNoZXInO1xuICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiJdfQ==
