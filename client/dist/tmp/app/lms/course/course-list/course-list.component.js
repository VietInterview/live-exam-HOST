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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var course_model_1 = require("../../../shared/models/course.model");
var course_unit_model_1 = require("../../../shared/models/course-unit.model");
var course_syllabus_model_1 = require("../../../shared/models/course-syllabus.model");
var course_member_model_1 = require("../../../shared/models/course-member.model");
var course_syllabus_dialog_component_1 = require("../../../cms/course/course-syllabus/course-syllabus.dialog.component");
var gradebook_list_component_1 = require("../gradebook-list/gradebook-list.component");
var class_list_dialog_component_1 = require("../class-list/class-list.dialog.component");
var CourseListComponent = (function (_super) {
    __extends(CourseListComponent, _super);
    function CourseListComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.COURSE_STATUS = constants_1.COURSE_STATUS;
        _this.COURSE_MODE = constants_1.COURSE_MODE;
        return _this;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.CurrentUser;
        course_member_model_1.CourseMember.listByUser(this, this.authService.CurrentUser.id).subscribe(function (members) {
            var courseIds = _.pluck(members, 'course_id');
            Observable_1.Observable.zip(course_model_1.Course.array(_this, courseIds), course_model_1.Course.listByAuthor(_this, _this.currentUser.id))
                .map(function (courses) {
                return _.flatten(courses);
            })
                .subscribe(function (courses) {
                courses = _.uniq(courses, function (course) {
                    return course.id;
                });
                _.each(courses, function (course) {
                    if (course.syllabus_id)
                        course_unit_model_1.CourseUnit.countBySyllabus(_this, course.syllabus_id).subscribe(function (count) {
                            course.unit_count = count;
                        });
                    else
                        course.unit_count = 0;
                    course.member = _.find(members, function (member) {
                        return member.course_id == course.id;
                    });
                });
                _this.courses = courses;
            });
        });
    };
    CourseListComponent.prototype.getCourseSyllabus = function (course) {
        var _this = this;
        return course_syllabus_model_1.CourseSyllabus.byCourse(this, course.id).flatMap(function (syllabus) {
            if (syllabus)
                return Observable_1.Observable.of(syllabus);
            else {
                var syllabus = new course_syllabus_model_1.CourseSyllabus();
                syllabus.course_id = course.id;
                syllabus.name = course.name;
                return syllabus.save(_this);
            }
        });
    };
    CourseListComponent.prototype.editSyllabus = function (course) {
        var _this = this;
        this.getCourseSyllabus(course).subscribe(function (syllabus) {
            _this.syllabusDialog.show(syllabus);
        });
    };
    CourseListComponent.prototype.studyCourse = function (course) {
    };
    CourseListComponent.prototype.manageStudent = function (member, course) {
    };
    CourseListComponent.prototype.manageClass = function (member, course) {
        this.classListDialog.show(member, course);
    };
    __decorate([
        core_1.ViewChild(course_syllabus_dialog_component_1.CourseSyllabusDialog),
        __metadata("design:type", course_syllabus_dialog_component_1.CourseSyllabusDialog)
    ], CourseListComponent.prototype, "syllabusDialog", void 0);
    __decorate([
        core_1.ViewChild(class_list_dialog_component_1.ClassListDialog),
        __metadata("design:type", class_list_dialog_component_1.ClassListDialog)
    ], CourseListComponent.prototype, "classListDialog", void 0);
    __decorate([
        core_1.ViewChild(gradebook_list_component_1.GradebookListDialog),
        __metadata("design:type", gradebook_list_component_1.GradebookListDialog)
    ], CourseListComponent.prototype, "gradebookListDialog", void 0);
    CourseListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-lms-course-list',
            template: "<style> ul {   list-style-type: none;   padding-left: 0px; }  .vertical {   vertical-align: middle; } </style> <div class=\"card card-w-title\">   <h1>{{'My courses'|translate}}</h1>   <p-dataList [value]=\"courses\" [paginator]=\"true\" [rows]=\"5\">     <ng-template let-course pTemplate=\"item\">       <p-card>         <p-header>         </p-header>         <div class=\"ui-g\">           <div class=\"ui-g-8\">             <span class=\"profile-image-wrapper\">                 <img [src]='course.logo | imageBase64'/>             </span>             <h4>               <span>{{course.name}}</span>             </h4>             <span class=\"c-status\">               {{COURSE_STATUS[course.status]|translate}}             </span>             <h5 class=\"c-title\">{{'Summary'|translate}}</h5>             <p>               {{course.summary}}             </p>             <h5 class=\"c-title\">{{'Description'|translate}}</h5>             <p [innerHTML]=\"course.description\"></p>           </div>           <div class=\"ui-g-4\">             <p-card>               <ul class=\"list-cmt\">                 <li class=\"clearfix\">                   <i class=\"material-icons\">toys</i>                   <span class=\"cmt-title\">{{'Code'|translate}}</span>                   <span class=\"cmt-detail\">{{course.code}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">copyright</i>                   <span class=\"cmt-title\">{{'Author'|translate}}</span>                   <span class=\"cmt-detail\">{{course.author_name}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">invert_colors</i>                   <span class=\"cmt-title\">{{'Mode'|translate}}</span>                   <span class=\"cmt-detail\">{{COURSE_MODE[course.mode]|translate}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">layers</i>                   <span class=\"cmt-title\">{{'Number of unit'|translate}}</span>                   <span class=\"cmt-detail\">{{course.unit_count}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">toc</i>                   <span class=\"cmt-title\">{{'Group'|translate}}</span>                   <span class=\"cmt-detail\">{{course.group_id__DESC__}}</span>                 </li>               </ul>               <p-footer>                 <button pButton type=\"button\" icon=\"ui-icon-arrow-forward\" title=\"{{'Join'| translate}}\" label=\"{{'Join'|translate}}\" class=\" green-btn\" style=\"margin-right:4px;\" (click)=\"joinCourse(course, course.member)\" *ngIf=\"course.member!=null && course.member.role =='student'\" [disabled]=\"course.status !='published'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-edit\" title=\"{{'Edit content'| translate}}\" label=\"{{'Edit course'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"editSyllabus(course)\" *ngIf=\"course.author_id==+currentUser.id\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-supervisor-account\" title=\"{{'Gradebook'|translate}}\" label=\"{{'Gradebook'| translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" (click)=\"manageStudent(course.member, course)\" *ngIf=\"course.member && course.member.role=='teacher'  && course.status =='published'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-cloud-download\" title=\"{{'Course material'|translate}}\" label=\"{{'Course material'| translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" (click)=\"manageCourseMaterial(course.member, course)\" *ngIf=\"course.member && course.member.role=='teacher'  && course.status =='published'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-question-answer\" title=\"{{'FAQ'|translate}}\" label=\"{{'FAQ'| translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" (click)=\"manageFaq(course.member, course)\" *ngIf=\"course.member && course.member.role=='teacher'  && course.status =='published'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-supervisor-account\" title=\"{{'Livestream'| translate}}\" label=\"{{'Livestream'|translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" (click)=\"manageClass(course.member, course)\" *ngIf=\"course.member && course.member.role=='teacher' && course.mode=='group' && course.status =='published'\"></button>               </p-footer>             </p-card>           </div>         </div>       </p-card>     </ng-template>   </p-dataList>   <etraining-course-syllabus-dialog></etraining-course-syllabus-dialog>   <etraining-gradebook-list-dialog></etraining-gradebook-list-dialog>   <etraining-class-list-dialog></etraining-class-list-dialog> </div>",
            styles: [".mrg-bt{margin-bottom:15px}.list-cmt{padding-left:0}.list-cmt li{list-style:none;padding:16px 24px;border-bottom:1px solid #dbdbdb}.list-cmt li i{font-size:24px;margin-right:8px;width:32px;vertical-align:middle;color:#757575}.list-cmt li .cmt-title{font-weight:700;margin-right:8px}.list-cmt li .cmt-detail{color:#757575;float:right}.c-title{font-size:15px}.c-status{background-color:#e91e63;border-radius:9px;padding:2px 8px;color:#fff}.profile-image-wrapper img{width:400px;height:250px}"],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CourseListComponent);
    return CourseListComponent;
}(base_component_1.BaseComponent));
exports.CourseListComponent = CourseListComponent;
