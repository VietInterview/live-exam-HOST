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
var assessment_module_1 = require("../assessment/assessment.module");
var cms_module_1 = require("../cms/cms.module");
var lms_component_1 = require("./lms.component");
var exam_list_component_1 = require("./exam/exam-list/exam-list.component");
var exam_study_dialog_component_1 = require("./exam/exam-study/exam-study.dialog.component");
var exam_marking_dialog_component_1 = require("./exam/exam-marking/exam-marking.dialog.component");
var course_list_component_1 = require("./course/course-list/course-list.component");
var course_study_component_1 = require("./course/course-study/course-study.component");
var class_conference_dialog_component_1 = require("./course/class-conference/class-conference.dialog.component");
var class_list_dialog_component_1 = require("./course/class-list/class-list.dialog.component");
var question_marking_dialog_component_1 = require("./exam/question-marking/question-marking.dialog.component");
var exam_score_dialog_component_1 = require("./exam/exam-score/exam-score.dialog.component");
var answer_sheet_dialog_component_1 = require("./exam/answer-sheet/answer-sheet.dialog.component");
var conference_list_component_1 = require("./conference/conference-list/conference-list.component");
var course_material_list_component_1 = require("./course/course-material-list/course-material-list.component");
var course_material_dialog_component_1 = require("./course/course-material/course-material.dialog.component");
var course_faq_list_component_1 = require("./course/course-faq-list/course-faq-list.component");
var course_faq_dialog_component_1 = require("./course/course-faq/course-faq.dialog.component");
var gradebook_list_component_1 = require("./course/gradebook-list/gradebook-list.component");
var gradebook_dialog_component_1 = require("./course/gradebook/gradebook.dialog.component");
var LMSModule = (function () {
    function LMSModule() {
    }
    LMSModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, cms_module_1.CMSModule, assessment_module_1.AssessmentModule, auth_module_1.AuthModule],
            declarations: [lms_component_1.LMSComponent, exam_list_component_1.ExamListComponent, exam_study_dialog_component_1.ExamStudyDialog, exam_marking_dialog_component_1.ExamMarkingDialog,
                course_list_component_1.CourseListComponent, course_study_component_1.CourseStudyComponent, question_marking_dialog_component_1.QuestionMarkingDialog,
                exam_score_dialog_component_1.ExamScoreDialog, answer_sheet_dialog_component_1.AnswerSheetDialog, class_list_dialog_component_1.ClassListDialog,
                class_conference_dialog_component_1.ClassConferenceDialog, conference_list_component_1.ConferenceListComponent, course_material_list_component_1.CourseMaterialListDialog,
                course_material_dialog_component_1.CourseMaterialDialog, course_faq_list_component_1.CourseFaqListDialog, course_faq_dialog_component_1.CourseFaqDialog,
                gradebook_dialog_component_1.GradebookDialog, gradebook_list_component_1.GradebookListDialog],
            exports: [],
            providers: []
        })
    ], LMSModule);
    return LMSModule;
}());
exports.LMSModule = LMSModule;
