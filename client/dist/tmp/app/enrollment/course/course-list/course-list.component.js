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
var constants_1 = require("../../../shared/models/constants");
var course_model_1 = require("../../../shared/models/course.model");
var group_model_1 = require("../../../shared/models/group.model");
var course_dialog_component_1 = require("../course-dialog/course-dialog.component");
var enrollment_dialog_component_1 = require("../../enrollment-dialog/enrollment-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var CourseListComponent = (function (_super) {
    __extends(CourseListComponent, _super);
    function CourseListComponent(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.COURSE_MODE = constants_1.COURSE_MODE;
        _this.COURSE_STATUS = constants_1.COURSE_STATUS;
        return _this;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.COURSE).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
        this.loadCourses();
    };
    CourseListComponent.prototype.add = function () {
        var _this = this;
        var course = new course_model_1.Course();
        this.courseDialog.show(course);
        this.courseDialog.onCreateComplete.subscribe(function () {
            _this.loadCourses();
        });
    };
    CourseListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedCourse)
            this.courseDialog.show(this.selectedCourse);
        this.courseDialog.onUpdateComplete.subscribe(function () {
            _this.loadCourses();
        });
    };
    CourseListComponent.prototype.enroll = function () {
        if (this.selectedCourse)
            this.courseEnrollDialog.enrollCourse(this.selectedCourse);
    };
    CourseListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedCourse)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedCourse.delete(_this).subscribe(function () {
                        _this.loadCourses();
                        _this.selectedCourse = null;
                    });
                }
            });
    };
    CourseListComponent.prototype.loadCourses = function () {
        var _this = this;
        if (this.selectedNode)
            course_model_1.Course.listByGroup(this, this.selectedNode.data.id).subscribe(function (courses) {
                _this.courses = courses;
            });
        else
            course_model_1.Course.all(this).subscribe(function (courses) {
                _this.courses = courses;
            });
    };
    CourseListComponent.prototype.nodeSelect = function (event) {
        this.loadCourses();
    };
    __decorate([
        core_1.ViewChild(course_dialog_component_1.CourseDialog),
        __metadata("design:type", course_dialog_component_1.CourseDialog)
    ], CourseListComponent.prototype, "courseDialog", void 0);
    __decorate([
        core_1.ViewChild(enrollment_dialog_component_1.CourseEnrollDialog),
        __metadata("design:type", enrollment_dialog_component_1.CourseEnrollDialog)
    ], CourseListComponent.prototype, "courseEnrollDialog", void 0);
    CourseListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-list',
            template: "<div class=\"card card-w-title\">     <h1>{{'Courses'|translate}}</h1>     <div class=\"ui-g\">       <div class=\"ui-g-12\">         <label>{{'Course group'|translate}}</label>         <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>       </div>         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedCourse\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedCourse\"></button>                     <button pButton type=\"button\" label=\"{{'Enroll'|translate}}\" class=\"green-btn\" icon=\"ui-icon-people\" (click)=\"enroll()\" [disabled]=\"!selectedCourse || selectedCourse.mode=='group'\"></button>                 </div>             </p-toolbar>             <p-table #courseTable [value]=\"courses\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\"              [(selection)]=\"selectedCourse\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th [pSortableColumn]=\"'name'\">                             {{'Name'|translate}}                             <p-sortIcon [field]=\"'name'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'code'\">                             {{'Code'|translate}}                             <p-sortIcon [field]=\"'code'\"></p-sortIcon>                         </th>                         <th>                             {{'Summary'|translate}}                         </th>                         <th [pSortableColumn]=\"'mode'\">                             {{'Mode'|translate}}                             <p-sortIcon [field]=\"'mode'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'status'\">                             {{'Status'|translate}}                             <p-sortIcon [field]=\"'status'\"></p-sortIcon>                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-course>                     <tr [pSelectableRow]=\"course\">                         <td>{{course.name}}</td>                         <td>{{course.code}}</td>                         <td>{{course.summary}}</td>                         <td>{{COURSE_MODE[course.mode] | translate}}</td>                         <td>{{COURSE_STATUS[course.status] | translate}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{courses?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\" >                     <tr>                         <td [attr.colspan]=\"5\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-course-dialog></etraining-course-dialog>             <etraining-course-enrollment-dialog></etraining-course-enrollment-dialog>         </div>     </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], CourseListComponent);
    return CourseListComponent;
}(base_component_1.BaseComponent));
exports.CourseListComponent = CourseListComponent;
