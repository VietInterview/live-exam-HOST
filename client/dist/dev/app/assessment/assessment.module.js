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
var assessment_component_1 = require("./assessment.component");
var exam_list_component_1 = require("./exam/exam-list/exam-list.component");
var exam_dialog_component_1 = require("./exam/exam-dialog/exam-dialog.component");
var question_list_component_1 = require("./question/question-list/question-list.component");
var question_dialog_component_1 = require("./question/question-dialog/question-dialog.component");
var question_container_directive_1 = require("./question/question-template/question-container.directive");
var single_choice_question_component_1 = require("./question/question-template/single-choice-question/single-choice-question.component");
var open_end_question_component_1 = require("./question/question-template/open-end-question/open-end-question.component");
var import_dialog_component_1 = require("./question/import-dialog/import-dialog.component");
var enrollment_dialog_component_1 = require("./exam/enrollment-dialog/enrollment-dialog.component");
var AssessmentModule = (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [assessment_component_1.AssessmentComponent, exam_list_component_1.ExamListComponent, exam_dialog_component_1.ExamDialog,
                question_list_component_1.QuestionListComponent, question_dialog_component_1.QuestionDialog, question_container_directive_1.QuestionContainerDirective,
                single_choice_question_component_1.SingleChoiceQuestionComponent, open_end_question_component_1.OpenEndQuestionComponent, import_dialog_component_1.QuestionImportDialog, enrollment_dialog_component_1.ExamEnrollDialog],
            providers: [],
            exports: [question_container_directive_1.QuestionContainerDirective, exam_dialog_component_1.ExamDialog],
            entryComponents: [single_choice_question_component_1.SingleChoiceQuestionComponent, open_end_question_component_1.OpenEndQuestionComponent]
        })
    ], AssessmentModule);
    return AssessmentModule;
}());
exports.AssessmentModule = AssessmentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLG1EQUFpRDtBQUNqRCx5REFBMEQ7QUFDMUQsK0RBQTZEO0FBQzdELDRFQUF5RTtBQUN6RSxrRkFBc0U7QUFDdEUsNEZBQXlGO0FBQ3pGLGtHQUFzRjtBQUN0RiwwR0FBdUc7QUFDdkcseUlBQXFJO0FBQ3JJLDBIQUFzSDtBQUN0SCw0RkFBd0Y7QUFDeEYsb0dBQXdGO0FBV3hGO0lBQUE7SUFDQSxDQUFDO0lBRFksZ0JBQWdCO1FBVDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLCtCQUFlLEVBQUUsd0JBQVUsQ0FBQztZQUN0QyxZQUFZLEVBQUUsQ0FBQywwQ0FBbUIsRUFBRSx1Q0FBaUIsRUFBRSxrQ0FBVTtnQkFDN0QsK0NBQXFCLEVBQUUsMENBQWMsRUFBRSx5REFBMEI7Z0JBQ2pFLGdFQUE2QixFQUFFLHNEQUF3QixFQUFFLDhDQUFvQixFQUFFLDhDQUFnQixDQUFDO1lBQ3BHLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMseURBQTBCLEVBQUUsa0NBQVUsQ0FBQztZQUNqRCxlQUFlLEVBQUUsQ0FBQyxnRUFBNkIsRUFBRSxzREFBd0IsQ0FBQztTQUM3RSxDQUFDO09BQ1csZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FERCxBQUNDLElBQUE7QUFEWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2Fzc2Vzc21lbnQvYXNzZXNzbWVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgRXJwU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0ICB7IEFzc2Vzc21lbnRDb21wb25lbnQgfSBmcm9tICcuL2Fzc2Vzc21lbnQuY29tcG9uZW50J1xuaW1wb3J0IHsgRXhhbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2V4YW0vZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhhbURpYWxvZyB9IGZyb20gJy4vZXhhbS9leGFtLWRpYWxvZy9leGFtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUXVlc3Rpb25MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9xdWVzdGlvbi9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFF1ZXN0aW9uRGlhbG9nIH0gZnJvbSAnLi9xdWVzdGlvbi9xdWVzdGlvbi1kaWFsb2cvcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vcXVlc3Rpb24vcXVlc3Rpb24tdGVtcGxhdGUvcXVlc3Rpb24tY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaW5nbGVDaG9pY2VRdWVzdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcXVlc3Rpb24vcXVlc3Rpb24tdGVtcGxhdGUvc2luZ2xlLWNob2ljZS1xdWVzdGlvbi9zaW5nbGUtY2hvaWNlLXF1ZXN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcGVuRW5kUXVlc3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL29wZW4tZW5kLXF1ZXN0aW9uL29wZW4tZW5kLXF1ZXN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWVzdGlvbkltcG9ydERpYWxvZyB9IGZyb20gJy4vcXVlc3Rpb24vaW1wb3J0LWRpYWxvZy9pbXBvcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtRW5yb2xsRGlhbG9nIH0gZnJvbSAnLi9leGFtL2Vucm9sbG1lbnQtZGlhbG9nL2Vucm9sbG1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0VycFNoYXJlZE1vZHVsZSwgQXV0aE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQXNzZXNzbWVudENvbXBvbmVudCwgRXhhbUxpc3RDb21wb25lbnQsIEV4YW1EaWFsb2csXG4gICAgXHRcdFx0XHRRdWVzdGlvbkxpc3RDb21wb25lbnQsIFF1ZXN0aW9uRGlhbG9nLCBRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBcdFx0XHRcdFNpbmdsZUNob2ljZVF1ZXN0aW9uQ29tcG9uZW50LCBPcGVuRW5kUXVlc3Rpb25Db21wb25lbnQsIFF1ZXN0aW9uSW1wb3J0RGlhbG9nLCBFeGFtRW5yb2xsRGlhbG9nXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGV4cG9ydHM6IFtRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSwgRXhhbURpYWxvZ10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbU2luZ2xlQ2hvaWNlUXVlc3Rpb25Db21wb25lbnQsIE9wZW5FbmRRdWVzdGlvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXNzZXNzbWVudE1vZHVsZSB7XG59XG4iXX0=
