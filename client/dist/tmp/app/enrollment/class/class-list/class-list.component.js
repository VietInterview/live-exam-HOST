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
var group_model_1 = require("../../../shared/models/group.model");
var course_model_1 = require("../../../shared/models/course.model");
var course_class_model_1 = require("../../../shared/models/course-class.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var class_dialog_component_1 = require("../class-dialog/class-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var enrollment_dialog_component_1 = require("../../enrollment-dialog/enrollment-dialog.component");
var CourseClassListComponent = (function (_super) {
    __extends(CourseClassListComponent, _super);
    function CourseClassListComponent(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.COURSE_MODE = constants_1.COURSE_MODE;
        _this.COURSE_STATUS = constants_1.COURSE_STATUS;
        _this.courses = [];
        return _this;
    }
    CourseClassListComponent.prototype.nodeSelect = function (event) {
        var _this = this;
        if (this.selectedNode) {
            course_model_1.Course.listByGroupAndMode(this, this.selectedNode.data.id, 'group').subscribe(function (courses) {
                _this.courses = courses;
            });
        }
    };
    CourseClassListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadClasses();
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.COURSE).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
    };
    CourseClassListComponent.prototype.enroll = function () {
        if (this.selectedClass)
            this.courseEnrollDialog.enrollClass(this.selectedClass);
    };
    CourseClassListComponent.prototype.loadClasses = function () {
        var _this = this;
        var self = this;
        course_class_model_1.CourseClass.all(this).subscribe(function (classes) {
            _this.classes = classes;
        });
    };
    CourseClassListComponent.prototype.add = function () {
        var _this = this;
        if (this.selectedCourse) {
            var clazz = new course_class_model_1.CourseClass();
            clazz.course_id = this.selectedCourse.id;
            this.classDialog.show(clazz);
            this.classDialog.onCreateComplete.subscribe(function () {
                _this.loadClasses();
            });
        }
    };
    CourseClassListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedClass)
            this.classDialog.show(this.selectedClass);
        this.classDialog.onUpdateComplete.subscribe(function () {
            _this.loadClasses();
        });
    };
    CourseClassListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedClass)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedClass.delete(_this).subscribe(function () {
                        _this.loadClasses();
                        _this.selectedClass = null;
                    });
                }
            });
    };
    __decorate([
        core_1.ViewChild(class_dialog_component_1.CourseClassDialog),
        __metadata("design:type", class_dialog_component_1.CourseClassDialog)
    ], CourseClassListComponent.prototype, "classDialog", void 0);
    __decorate([
        core_1.ViewChild(enrollment_dialog_component_1.CourseEnrollDialog),
        __metadata("design:type", enrollment_dialog_component_1.CourseEnrollDialog)
    ], CourseClassListComponent.prototype, "courseEnrollDialog", void 0);
    CourseClassListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-class-list',
            template: "<div class=\"card card-w-title\">   <h1>{{'Classes'|translate}}</h1>   <div class=\"ui-g\">     <div class=\"ui-g-12\">       <p-fieldset legend=\"{{'Course tree'|translate}}\" >         <div class=\"ui-g-4\">           <p-tree [value]=\"tree\" selectionMode=\"single\" (onNodeSelect)=\"nodeSelect($event)\" [(selection)]=\"selectedNode\"></p-tree>         </div>         <div class=\"ui-g-8\">           <p-table [value]=\"courses\" [(selection)]=\"selectedCourse\" >             <ng-template pTemplate=\"header\">               <tr>                 <th style=\"width: 2.25em\"></th>                 <th>                   {{'Code'|translate}}                 </th>                 <th>                   {{'Name'|translate}}                 </th>                 <th>                   {{'Mode'|translate}}                 </th>                 <th>                   {{'Status'|translate}}                 </th>               </tr>             </ng-template>             <ng-template pTemplate=\"body\" let-rowData>               <tr [pSelectableRow]=\"rowData\">                 <td>                   <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>                 </td>                 <td>                   {{rowData.code}}                 </td>                 <td>                   {{rowData.name}}                 </td>                 <td>{{COURSE_MODE[rowData.mode] | translate}}</td>                 <td>{{COURSE_STATUS[rowData.status] | translate}}</td>               </tr>             </ng-template>           </p-table>         </div>       </p-fieldset>     </div>     <div class=\"ui-g-12\">       <p-toolbar>         <div class=\"ui-toolbar-group-left\">           <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\" [disabled]=\"!selectedCourse || !courses.length\"></button>           <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedClass\"></button>           <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedClass\"></button>           <button pButton type=\"button\" label=\"{{'Enroll'|translate}}\" class=\"green-btn\" icon=\"ui-icon-people\" (click)=\"enroll()\" [disabled]=\"!selectedClass\"></button>         </div>       </p-toolbar>       <p-table #classTable [value]=\"classes | byCourse: selectedCourse\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedClass\" [responsive]=\"true\">         <ng-template pTemplate=\"header\">           <tr>             <th [pSortableColumn]=\"'name'\">               {{'Name'|translate}}               <p-sortIcon [field]=\"'name'\"></p-sortIcon>             </th>             <th>               {{'Course'|translate}}             </th>             <th [pSortableColumn]=\"'start'\">               {{'Start'|translate}}               <p-sortIcon [field]=\"'start'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'end'\">               {{'End'|translate}}               <p-sortIcon [field]=\"'end'\"></p-sortIcon>             </th>             <th>               {{'Supervisor'|translate}}             </th>           </tr>         </ng-template>         <ng-template pTemplate=\"body\" let-class>           <tr [pSelectableRow]=\"class\">             <td>{{class.name}}</td>             <td>{{class.course_name}}</td>             <td>{{class.start | date : \"dd/MM/yyyy\"}}</td>             <td>{{class.end | date : \"dd/MM/yyyy\"}}</td>             <td>{{class.supervisor_name}}</td>           </tr>         </ng-template>         <ng-template pTemplate=\"summary\">           {{'Total records'|translate}} : {{classes?.length}}         </ng-template>         <ng-template pTemplate=\"emptymessage\" >           <tr>             <td [attr.colspan]=\"5\">               {{'No records found'|translate}}             </td>           </tr>         </ng-template>       </p-table>       <etraining-class-dialog></etraining-class-dialog>        <etraining-course-dialog></etraining-course-dialog>        <etraining-course-enrollment-dialog></etraining-course-enrollment-dialog>     </div>   </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], CourseClassListComponent);
    return CourseClassListComponent;
}(base_component_1.BaseComponent));
exports.CourseClassListComponent = CourseClassListComponent;
