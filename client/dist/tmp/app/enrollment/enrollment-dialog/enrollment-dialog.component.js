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
var base_dialog_1 = require("../../shared/components/base/base.dialog");
var course_member_model_1 = require("../../shared/models/course-member.model");
var _ = require("underscore");
var member_dialog_component_1 = require("../member-dialog/member-dialog.component");
var constants_1 = require("../../shared/models/constants");
var select_user_dialog_component_1 = require("../../shared/components/select-user-dialog/select-user-dialog.component");
var CourseEnrollDialog = (function (_super) {
    __extends(CourseEnrollDialog, _super);
    function CourseEnrollDialog() {
        var _this = _super.call(this) || this;
        _this.COURSE_MODE = constants_1.COURSE_MODE;
        _this.COURSE_STATUS = constants_1.COURSE_STATUS;
        _this.COURSE_MEMBER_ROLE = constants_1.COURSE_MEMBER_ROLE;
        _this.COURSE_MEMBER_STATUS = constants_1.COURSE_MEMBER_STATUS;
        _this.COURSE_MEMBER_ENROLL_STATUS = constants_1.COURSE_MEMBER_ENROLL_STATUS;
        _this.items = [
            { label: _this.translateService.instant('Student'), value: 'student', command: function () { _this.add('student'); } },
            { label: _this.translateService.instant('Teacher'), value: 'teacher', command: function () { _this.add('teacher'); } },
        ];
        return _this;
    }
    CourseEnrollDialog.prototype.enrollCourse = function (course, courseClass) {
        this.course = course;
        this.courseClass = courseClass;
        this.display = true;
        this.processing = false;
        this.loadMembers();
    };
    CourseEnrollDialog.prototype.enrollClass = function (courseClass) {
        this.courseClass = courseClass;
        this.display = true;
        this.processing = false;
        this.loadMembers();
    };
    CourseEnrollDialog.prototype.hide = function () {
        this.display = false;
    };
    CourseEnrollDialog.prototype.add = function (role) {
        var _this = this;
        this.usersDialog.show();
        this.usersDialog.onSelectUsers.subscribe(function (users) {
            _this.processing = true;
            var subscriptions = [];
            _.each(users, function (user) {
                var member = new course_member_model_1.CourseMember();
                if (_this.courseClass) {
                    member.course_id = _this.courseClass.course_id;
                    member.class_id = _this.courseClass.id;
                }
                member.role = role;
                if (_this.course)
                    member.course_id = _this.course.id;
                member.user_id = user.id;
                member.status = 'active';
                member.enroll_status = 'registered';
                member.date_register = new Date();
                subscriptions.push(member.save(_this));
            });
            Observable_1.Observable.forkJoin.apply(Observable_1.Observable, subscriptions).subscribe(function () {
                _this.processing = false;
                _this.loadMembers();
            });
        });
    };
    CourseEnrollDialog.prototype.edit = function (member) {
        if (member)
            this.memberDialog.show(member);
    };
    CourseEnrollDialog.prototype.delete = function (member) {
        var _this = this;
        if (member)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    member.delete(_this).subscribe(function () {
                        _this.selectedStudent = null;
                        _this.selectedTeacher = null;
                        _this.loadMembers();
                    });
                }
            });
    };
    CourseEnrollDialog.prototype.loadMembers = function () {
        var _this = this;
        if (this.course)
            course_member_model_1.CourseMember.listByCourse(this, this.course.id).subscribe(function (members) {
                _this.students = _.filter(members, function (member) {
                    return member.role == 'student';
                });
                _this.selectedStudent = null;
                _this.teachers = _.filter(members, function (member) {
                    return member.role == 'teacher';
                });
                _this.selectedTeacher = null;
            });
        if (this.courseClass)
            course_member_model_1.CourseMember.listByClass(this, this.courseClass.id).subscribe(function (members) {
                _this.students = _.filter(members, function (member) {
                    return member.role == 'student';
                });
                _this.selectedStudent = null;
                _this.teachers = _.filter(members, function (member) {
                    return member.role == 'teacher';
                });
                _this.selectedTeacher = null;
            });
    };
    __decorate([
        core_1.ViewChild(member_dialog_component_1.CourseMemberDialog),
        __metadata("design:type", member_dialog_component_1.CourseMemberDialog)
    ], CourseEnrollDialog.prototype, "memberDialog", void 0);
    __decorate([
        core_1.ViewChild(select_user_dialog_component_1.SelectUsersDialog),
        __metadata("design:type", select_user_dialog_component_1.SelectUsersDialog)
    ], CourseEnrollDialog.prototype, "usersDialog", void 0);
    CourseEnrollDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-enrollment-dialog',
            template: "<p-dialog header=\"{{'Course enrollment'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" height=\"100%\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <p-tabView>       <p-tabPanel header=\"{{'Students'|translate}}\" leftIcon=\"ui-icon-people\">         <div class=\"ui-g-12 \">           <p-toolbar>             <div class=\"ui-toolbar-group-left \">               <button pButton type=\"button \" label=\"{{ 'Add'|translate}} \" class=\"green-btn \" icon=\"ui-icon-add \" (click)=\"add('student') \"></button>               <button pButton type=\"button \" label=\"{{ 'Edit'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-mode-edit \" (click)=\"edit(selectedStudent) \" [disabled]=\"!selectedStudent\"></button>               <button pButton type=\"button \" label=\"{{ 'Delete'|translate}} \" class=\"red-btn \" icon=\"ui-icon-delete \" (click)=\"delete(selectedStudent) \" [disabled]=\"!selectedStudent \"></button>             </div>           </p-toolbar>           <p-table #studentTable [value]=\"students\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedStudent \" [responsive]=\"true \" sortField=\"role\">             <ng-template pTemplate=\"header\">               <tr>                 <th [pSortableColumn]=\"'name'\">                   {{'Name'|translate}}                   <p-sortIcon [field]=\"'name'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'email'\">                   {{'Email'|translate}}                   <p-sortIcon [field]=\"'email'\"></p-sortIcon>                 </th>                 <th>{{'Phone'|translate}}</th>                 <th [pSortableColumn]=\"'etraining_group__DESC__'\">                   {{'Group'|translate}}                   <p-sortIcon [field]=\"'etraining_group__DESC__'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'status'\">                   {{'Status'|translate}}                   <p-sortIcon [field]=\"'status'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'enroll_status'\">                   {{'Enroll status'|translate}}                   <p-sortIcon [field]=\"'enroll_status'\"></p-sortIcon>                 </th>               </tr>             </ng-template>             <ng-template pTemplate=\"body\" let-member>               <tr [pSelectableRow]=\"member \">                 <td>{{member.name}}</td>                 <td>{{member.email}}</td>                 <td>{{member.phone}}</td>                 <td>{{member.etraining_group_id__DESC__}}</td>                 <td>{{COURSE_MEMBER_STATUS[member.status] | translate}}</td>                 <td>{{COURSE_MEMBER_ENROLL_STATUS[member.enroll_status] | translate}}</td>               </tr>             </ng-template>             <ng-template pTemplate=\"summary\">               {{'Total records'|translate}} : {{students?.length}}             </ng-template>             <ng-template pTemplate=\"emptymessage\">               <tr>                 <td [attr.colspan]=\"6\">                   {{'No records found'|translate}}                 </td>               </tr>             </ng-template>           </p-table>         </div>       </p-tabPanel>       <p-tabPanel header=\"{{'Teachers'|translate}}\" leftIcon=\"ui-icon-people\">         <div class=\"ui-g-12 \">           <p-toolbar>             <div class=\"ui-toolbar-group-left \">               <button pButton type=\"button \" label=\"{{ 'Add'|translate}} \" class=\"green-btn \" icon=\"ui-icon-add \" (click)=\"add('teacher') \"></button>               <button pButton type=\"button \" label=\"{{ 'Edit'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-mode-edit \" (click)=\"edit(selectedTeacher) \" [disabled]=\"!selectedTeacher\"></button>               <button pButton type=\"button \" label=\"{{ 'Delete'|translate}} \" class=\"red-btn \" icon=\"ui-icon-delete \" (click)=\"delete(selectedTeacher) \" [disabled]=\"!selectedTeacher \"></button>             </div>           </p-toolbar>           <p-table #teacherTable [value]=\"teachers\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedTeacher \" [responsive]=\"true \" sortField=\"role\">             <ng-template pTemplate=\"header\">               <tr>                 <th [pSortableColumn]=\"'name'\">                   {{'Name'|translate}}                   <p-sortIcon [field]=\"'name'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'email'\">                   {{'Email'|translate}}                   <p-sortIcon [field]=\"'email'\"></p-sortIcon>                 </th>                 <th>{{'Phone'|translate}}</th>                 <th [pSortableColumn]=\"'etraining_group__DESC__'\">                   {{'Group'|translate}}                   <p-sortIcon [field]=\"'etraining_group__DESC__'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'status'\">                   {{'Status'|translate}}                   <p-sortIcon [field]=\"'status'\"></p-sortIcon>                 </th>               </tr>             </ng-template>             <ng-template pTemplate=\"body\" let-member>               <tr [pSelectableRow]=\"member \">                 <td>{{member.name}}</td>                 <td>{{member.email}}</td>                 <td>{{member.phone}}</td>                 <td>{{member.etraining_group_id__DESC__}}</td>                 <td>{{COURSE_MEMBER_STATUS[member.status]}}</td>               </tr>             </ng-template>             <ng-template pTemplate=\"summary\">               {{'Total records'|translate}} : {{teachers?.length}}             </ng-template>             <ng-template pTemplate=\"emptymessage\">               <tr>                 <td [attr.colspan]=\"5\">                   {{'No records found'|translate}}                 </td>               </tr>             </ng-template>           </p-table>         </div>       </p-tabPanel>     </p-tabView>     <etraining-course-member-dialog></etraining-course-member-dialog>     <etraining-select-user-dialog></etraining-select-user-dialog>   </p-scrollPanel>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], CourseEnrollDialog);
    return CourseEnrollDialog;
}(base_dialog_1.BaseDialog));
exports.CourseEnrollDialog = CourseEnrollDialog;
