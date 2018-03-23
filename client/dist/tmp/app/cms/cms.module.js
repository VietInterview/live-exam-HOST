"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_module_1 = require("../auth/auth.module");
var shared_module_1 = require("../shared/shared.module");
var cms_component_1 = require("./cms.component");
var exam_content_dialog_component_1 = require("./exam/content-dialog/exam-content.dialog.component");
var course_syllabus_dialog_component_1 = require("./course/course-syllabus/course-syllabus.dialog.component");
var grade_pipe_1 = require("./exam/grade.pipe");
var sum_pipe_1 = require("./exam/sum.pipe");
var unit_container_directive_1 = require("./course/course-unit-template/unit-container.directive");
var folder_unit_component_1 = require("./course/course-unit-template/folder/folder-unit.component");
var exercise_unit_component_1 = require("./course/course-unit-template/exercise/exercise-unit.component");
var video_lecture_unit_component_1 = require("./course/course-unit-template/video/video-lecture-unit.component");
var html_lecture_unit_component_1 = require("./course/course-unit-template/lecture/html-lecture-unit.component");
var course_unit_dialog_component_1 = require("./course/course-unit-dialog/course-unit-dialog.component");
var CMSModule = (function () {
    function CMSModule() {
    }
    CMSModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [cms_component_1.CMSComponent, grade_pipe_1.ValidateGradePipe, sum_pipe_1.SumPipe, exam_content_dialog_component_1.ExamContentDialog,
                course_syllabus_dialog_component_1.CourseSyllabusDialog, unit_container_directive_1.CourseUnitContainerDirective, folder_unit_component_1.FolderCourseUnitComponent,
                exercise_unit_component_1.ExerciseCourseUnitComponent, video_lecture_unit_component_1.VideoLectureCourseUnitComponent, html_lecture_unit_component_1.HtmlLectureCourseUnitComponent, course_unit_dialog_component_1.CourseUnitDialog],
            exports: [exam_content_dialog_component_1.ExamContentDialog, course_syllabus_dialog_component_1.CourseSyllabusDialog],
            providers: [],
            entryComponents: [folder_unit_component_1.FolderCourseUnitComponent, exercise_unit_component_1.ExerciseCourseUnitComponent, video_lecture_unit_component_1.VideoLectureCourseUnitComponent, html_lecture_unit_component_1.HtmlLectureCourseUnitComponent]
        })
    ], CMSModule);
    return CMSModule;
}());
exports.CMSModule = CMSModule;
