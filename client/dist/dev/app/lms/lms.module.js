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
var question_marking_dialog_component_1 = require("./exam/question-marking/question-marking.dialog.component");
var exam_score_dialog_component_1 = require("./exam/exam-score/exam-score.dialog.component");
var answer_sheet_dialog_component_1 = require("./exam/answer-sheet/answer-sheet.dialog.component");
var LMSModule = (function () {
    function LMSModule() {
    }
    LMSModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, cms_module_1.CMSModule, assessment_module_1.AssessmentModule, auth_module_1.AuthModule],
            declarations: [lms_component_1.LMSComponent, exam_list_component_1.ExamListComponent, exam_study_dialog_component_1.ExamStudyDialog, exam_marking_dialog_component_1.ExamMarkingDialog,
                question_marking_dialog_component_1.QuestionMarkingDialog, exam_score_dialog_component_1.ExamScoreDialog, answer_sheet_dialog_component_1.AnswerSheetDialog],
            exports: [],
            providers: []
        })
    ], LMSModule);
    return LMSModule;
}());
exports.LMSModule = LMSModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvbG1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQseURBQTBEO0FBQzFELHFFQUFtRTtBQUNuRSxnREFBOEM7QUFDOUMsaURBQStDO0FBQy9DLDRFQUF3RTtBQUN4RSw2RkFBK0U7QUFDL0UsbUdBQXFGO0FBQ3JGLCtHQUFpRztBQUNqRyw2RkFBZ0Y7QUFDaEYsbUdBQXNGO0FBU3RGO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQVByQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQywrQkFBZSxFQUFFLHNCQUFTLEVBQUUsb0NBQWdCLEVBQUUsd0JBQVUsQ0FBQztZQUNuRSxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHVDQUFpQixFQUFFLDZDQUFlLEVBQUMsaURBQWlCO2dCQUNoRix5REFBcUIsRUFBRSw2Q0FBZSxFQUFFLGlEQUFpQixDQUFDO1lBQzNELE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLDhCQUFTIiwiZmlsZSI6ImFwcC9sbXMvbG1zLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBFcnBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBc3Nlc3NtZW50TW9kdWxlIH0gZnJvbSAnLi4vYXNzZXNzbWVudC9hc3Nlc3NtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDTVNNb2R1bGUgfSBmcm9tICcuLi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBMTVNDb21wb25lbnQgfSBmcm9tICcuL2xtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhhbUxpc3RDb21wb25lbnR9IGZyb20gJy4vZXhhbS9leGFtLWxpc3QvZXhhbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtU3R1ZHlEaWFsb2d9IGZyb20gJy4vZXhhbS9leGFtLXN0dWR5L2V4YW0tc3R1ZHkuZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtTWFya2luZ0RpYWxvZ30gZnJvbSAnLi9leGFtL2V4YW0tbWFya2luZy9leGFtLW1hcmtpbmcuZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWVzdGlvbk1hcmtpbmdEaWFsb2d9IGZyb20gJy4vZXhhbS9xdWVzdGlvbi1tYXJraW5nL3F1ZXN0aW9uLW1hcmtpbmcuZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtU2NvcmVEaWFsb2cgfSBmcm9tICcuL2V4YW0vZXhhbS1zY29yZS9leGFtLXNjb3JlLmRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2VyU2hlZXREaWFsb2cgfSBmcm9tICcuL2V4YW0vYW5zd2VyLXNoZWV0L2Fuc3dlci1zaGVldC5kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRXJwU2hhcmVkTW9kdWxlLCBDTVNNb2R1bGUsIEFzc2Vzc21lbnRNb2R1bGUsIEF1dGhNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0xNU0NvbXBvbmVudCwgRXhhbUxpc3RDb21wb25lbnQsIEV4YW1TdHVkeURpYWxvZyxFeGFtTWFya2luZ0RpYWxvZyxcblx0XHRcdFx0XHRRdWVzdGlvbk1hcmtpbmdEaWFsb2csIEV4YW1TY29yZURpYWxvZywgQW5zd2VyU2hlZXREaWFsb2ddLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTE1TTW9kdWxlIHtcbn1cbiJdfQ==
