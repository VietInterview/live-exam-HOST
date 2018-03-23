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
var member_dialog_component_1 = require("../member-dialog/member-dialog.component");
var select_user_dialog_component_1 = require("../../../shared/components/select-user-dialog/select-user-dialog.component");
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
        this.usersDialog.show();
        this.usersDialog.onSelectUsers.subscribe(function (users) {
            _this.processing = true;
            var subscriptions = [];
            _.each(users, function (user) {
                var member = new exam_member_model_1.ExamMember();
                member.role = role;
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
    ExamEnrollDialog.prototype.edit = function (member) {
        if (member)
            this.memberDialog.show(member);
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
            _this.candidates = _.filter(members, function (member) {
                return member.role == 'candidate';
            });
            _this.supervisors = _.filter(members, function (member) {
                return member.role == 'supervisor';
            });
        });
    };
    __decorate([
        core_1.ViewChild(member_dialog_component_1.ExamMemberDialog),
        __metadata("design:type", member_dialog_component_1.ExamMemberDialog)
    ], ExamEnrollDialog.prototype, "memberDialog", void 0);
    __decorate([
        core_1.ViewChild(select_user_dialog_component_1.SelectUsersDialog),
        __metadata("design:type", select_user_dialog_component_1.SelectUsersDialog)
    ], ExamEnrollDialog.prototype, "usersDialog", void 0);
    ExamEnrollDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-enrollment-dialog',
            template: "<p-dialog header=\"{{'Exam enrollment'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" height=\"100%\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <p-tabView>       <p-tabPanel header=\"{{'Candidates'|translate}}\" leftIcon=\"ui-icon-people\">         <div class=\"ui-g-12 \">           <p-toolbar>             <div class=\"ui-toolbar-group-left \">               <button pButton type=\"button \" label=\"{{ 'Add'|translate}} \" class=\"green-btn \" icon=\"ui-icon-add \" (click)=\"add('candidate') \"></button>               <button pButton type=\"button \" label=\"{{ 'Edit'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-mode-edit \" (click)=\"edit(selectedCandidate) \" [disabled]=\"!selectedCandidate \"></button>               <button pButton type=\"button \" label=\"{{ 'Delete'|translate}} \" class=\"red-btn \" icon=\"ui-icon-delete \" (click)=\"delete(selectedCandidate) \" [disabled]=\"!selectedCandidate \"></button>             </div>           </p-toolbar>           <p-table #candidateTable [value]=\"candidates\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedCandidate \" [responsive]=\"true \" sortField=\"name\">             <ng-template pTemplate=\"header\">               <tr>                 <th [pSortableColumn]=\"'name'\">                   {{'Name'|translate}}                   <p-sortIcon [field]=\"'name'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'email'\">                   {{'Email'|translate}}                   <p-sortIcon [field]=\"'email'\"></p-sortIcon>                 </th>                 <th>{{'Phone'|translate}}</th>                 <th [pSortableColumn]=\"'etraining_group_id__DESC__'\">                   {{'Group'|translate}}                   <p-sortIcon [field]=\"'etraining_group_id__DESC__'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'status'\">                   {{'Status'|translate}}                   <p-sortIcon [field]=\"'status'\"></p-sortIcon>                 </th>               </tr>             </ng-template>             <ng-template pTemplate=\"body\" let-member>               <tr [pSelectableRow]=\"member \">                 <td>{{member.name}}</td>                 <td>{{member.email}}</td>                 <td>{{member.phone}}</td>                 <td>{{member.etraining_group_id__DESC__}}</td>                 <td>{{EXAM_MEMBER_STATUS[member.status]}}</td>               </tr>             </ng-template>             <ng-template pTemplate=\"summary\">               {{'Total records'|translate}} : {{members?.length}}             </ng-template>             <ng-template pTemplate=\"emptymessage\">               <tr>                 <td [attr.colspan]=\"5 \">                   {{'No records found'|translate}}                 </td>               </tr>             </ng-template>           </p-table>         </div>       </p-tabPanel>       <p-tabPanel header=\"{{'Supervisors'|translate}}\" leftIcon=\"ui-icon-people\">         <div class=\"ui-g-12 \">           <p-toolbar>             <div class=\"ui-toolbar-group-left \">               <button pButton type=\"button \" label=\"{{ 'Add'|translate}} \" class=\"green-btn \" icon=\"ui-icon-add \" (click)=\"add('supervisor') \"></button>               <button pButton type=\"button \" label=\"{{ 'Edit'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-mode-edit \" (click)=\"edit(selectedSupervisor) \" [disabled]=\"!selectedSupervisor \"></button>               <button pButton type=\"button \" label=\"{{ 'Delete'|translate}} \" class=\"red-btn \" icon=\"ui-icon-delete \" (click)=\"delete(selectedSupervisor) \" [disabled]=\"!selectedSupervisor \"></button>             </div>           </p-toolbar>           <p-table #candidateTable [value]=\"supervisors\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedSupervisor \" [responsive]=\"true \" sortField=\"name\">             <ng-template pTemplate=\"header\">               <tr>                 <th [pSortableColumn]=\"'name'\">                   {{'Name'|translate}}                   <p-sortIcon [field]=\"'name'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'email'\">                   {{'Email'|translate}}                   <p-sortIcon [field]=\"'email'\"></p-sortIcon>                 </th>                 <th>{{'Phone'|translate}}</th>                 <th [pSortableColumn]=\"'etraining_group_id__DESC__'\">                   {{'Group'|translate}}                   <p-sortIcon [field]=\"'etraining_group_id__DESC__'\"></p-sortIcon>                 </th>                 <th [pSortableColumn]=\"'status'\">                   {{'Status'|translate}}                   <p-sortIcon [field]=\"'status'\"></p-sortIcon>                 </th>               </tr>             </ng-template>             <ng-template pTemplate=\"body\" let-member>               <tr [pSelectableRow]=\"member \">                 <td>{{member.name}}</td>                 <td>{{member.email}}</td>                 <td>{{member.phone}}</td>                 <td>{{member.etraining_group__DESC__}}</td>                 <td>{{EXAM_MEMBER_STATUS[member.status]}}</td>               </tr>             </ng-template>             <ng-template pTemplate=\"summary\">               {{'Total records'|translate}} : {{members?.length}}             </ng-template>             <ng-template pTemplate=\"emptymessage\">               <tr>                 <td [attr.colspan]=\"5 \">                   {{'No records found'|translate}}                 </td>               </tr>             </ng-template>           </p-table>         </div>       </p-tabPanel>     </p-tabView>   </p-scrollPanel>   <etraining-exam-member-dialog></etraining-exam-member-dialog>   <etraining-select-user-dialog></etraining-select-user-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], ExamEnrollDialog);
    return ExamEnrollDialog;
}(base_dialog_1.BaseDialog));
exports.ExamEnrollDialog = ExamEnrollDialog;
