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
var course_class_model_1 = require("../../../shared/models/course-class.model");
var class_conference_dialog_component_1 = require("../class-conference/class-conference.dialog.component");
var ClassListDialog = (function (_super) {
    __extends(ClassListDialog, _super);
    function ClassListDialog() {
        var _this = _super.call(this) || this;
        _this.display = false;
        _this.classes = [];
        return _this;
    }
    ClassListDialog.prototype.show = function (member, course) {
        var _this = this;
        this.display = true;
        this.member = member;
        this.course = course;
        course_class_model_1.CourseClass.listByCourse(this, course.id)
            .map(function (classList) {
            return _.filter(classList, function (obj) {
                return member.class_id == obj.id;
            });
        })
            .subscribe(function (classList) {
            _this.classes = classList;
        });
    };
    ClassListDialog.prototype.hide = function () {
        this.display = false;
    };
    ClassListDialog.prototype.manageConference = function () {
        if (this.selectedClass) {
            this.conferenceDialog.show(this.selectedClass);
        }
    };
    ClassListDialog.prototype.manageStudent = function () {
        if (this.selectedClass) {
        }
    };
    ClassListDialog.prototype.manageExam = function () {
        if (this.selectedClass) {
        }
    };
    __decorate([
        core_1.ViewChild(class_conference_dialog_component_1.ClassConferenceDialog),
        __metadata("design:type", class_conference_dialog_component_1.ClassConferenceDialog)
    ], ClassListDialog.prototype, "conferenceDialog", void 0);
    ClassListDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-class-list-dialog',
            template: "<p-dialog header=\"{{'Manage class'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"800\" [responsive]=\"true\" appendTo=\"body\">   <p-scrollPanel [style]=\"{width: '100%', height: '480px'}\">     <div class=\"ui-g-12 \">       <p-toolbar>         <div class=\"ui-toolbar-group-left \">           <button pButton type=\"button \" label=\"{{ 'Students'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-people \" (click)=\"manageStudent(selectedClass) \" [disabled]=\"!selectedClass\"></button>           <button pButton type=\"button \" label=\"{{ 'Exams'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-grade \" (click)=\"manageExam(selectedClass) \" [disabled]=\"!selectedClass\"></button>           <button pButton type=\"button \" label=\"{{ 'Conferences'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-call \" (click)=\"manageConference(selectedClass) \" [disabled]=\"!selectedClass\"></button>         </div>       </p-toolbar>       <p-table #classTable [value]=\"classes\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedClass\" [responsive]=\"true\">         <ng-template pTemplate=\"header\">           <tr>             <th [pSortableColumn]=\"'name'\">               {{'Name'|translate}}               <p-sortIcon [field]=\"'name'\"></p-sortIcon>             </th>             <th>               {{'Course'|translate}}             </th>             <th [pSortableColumn]=\"'start'\">               {{'Start'|translate}}               <p-sortIcon [field]=\"'start'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'end'\">               {{'End'|translate}}               <p-sortIcon [field]=\"'end'\"></p-sortIcon>             </th>           </tr>         </ng-template>         <ng-template pTemplate=\"body\" let-class>           <tr [pSelectableRow]=\"class\">             <td>{{class.name}}</td>             <td>{{class.course_name}}</td>             <td>{{class.start | date : \"dd/MM/yyyy\"}}</td>             <td>{{class.end | date : \"dd/MM/yyyy\"}}</td>           </tr>         </ng-template>         <ng-template pTemplate=\"summary\">           {{'Total records'|translate}} : {{classes?.length}}         </ng-template>         <ng-template pTemplate=\"emptymessage\">           <tr>             <td [attr.colspan]=\"5\">               {{'No records found'|translate}}             </td>           </tr>         </ng-template>       </p-table>     </div>   </p-scrollPanel>   <etraining-class-conference-dialog></etraining-class-conference-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], ClassListDialog);
    return ClassListDialog;
}(base_component_1.BaseComponent));
exports.ClassListDialog = ClassListDialog;
