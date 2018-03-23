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
var constants_1 = require("../../../shared/models/constants");
var exam_model_1 = require("../../../shared/models/exam.model");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var exam_content_dialog_component_1 = require("../../../cms/exam/content-dialog/exam-content.dialog.component");
var exam_study_dialog_component_1 = require("../exam-study/exam-study.dialog.component");
var exam_marking_dialog_component_1 = require("../exam-marking/exam-marking.dialog.component");
var exam_score_dialog_component_1 = require("../exam-score/exam-score.dialog.component");
var ExamListComponent = (function (_super) {
    __extends(ExamListComponent, _super);
    function ExamListComponent() {
        var _this = _super.call(this) || this;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.exams = [];
        return _this;
    }
    ExamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        exam_member_model_1.ExamMember.listByUser(this, this.authService.CurrentUser.id).subscribe(function (members) {
            var examIds = _.pluck(members, 'exam_id');
            exam_model_1.Exam.array(_this, examIds)
                .subscribe(function (exams) {
                _.each(exams, function (exam) {
                    exam.member = _.find(members, function (member) {
                        return member.exam_id == exam.id;
                    });
                    exam.member.examScore(_this, exam.id).subscribe(function (score) {
                        exam.member.score = score;
                    });
                    exam_question_model_1.ExamQuestion.countByExam(_this, exam.id).subscribe(function (count) {
                        exam.question_count = count;
                    });
                });
                _this.exams = _.filter(exams, function (exam) {
                    return exam.member.role == 'supervisor' || (exam.member.role == 'candidate' && exam.status == 'published');
                });
            });
        });
    };
    ExamListComponent.prototype.markExam = function (exam) {
        var _this = this;
        exam.containsOpenEndQuestion(this).subscribe(function (result) {
            if (result) {
                _this.markingDialog.show(exam);
            }
            else {
                _this.messageService.add({ severity: 'info', summary: 'Exam Info', detail: 'Exam is not available for marking' });
            }
        });
    };
    ExamListComponent.prototype.editContent = function (exam) {
        this.examContentDialog.show(exam);
    };
    ExamListComponent.prototype.viewScore = function (exam) {
        this.scoreDialog.show(exam);
    };
    ExamListComponent.prototype.startExam = function (exam, member) {
        var _this = this;
        this.confirmationService.confirm({
            message: this.translateService.instant('Are you sure to start ?'),
            accept: function () {
                _this.examStudyDialog.show(exam, member);
            }
        });
    };
    __decorate([
        core_1.ViewChild(exam_content_dialog_component_1.ExamContentDialog),
        __metadata("design:type", exam_content_dialog_component_1.ExamContentDialog)
    ], ExamListComponent.prototype, "examContentDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_study_dialog_component_1.ExamStudyDialog),
        __metadata("design:type", exam_study_dialog_component_1.ExamStudyDialog)
    ], ExamListComponent.prototype, "examStudyDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_marking_dialog_component_1.ExamMarkingDialog),
        __metadata("design:type", exam_marking_dialog_component_1.ExamMarkingDialog)
    ], ExamListComponent.prototype, "markingDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_score_dialog_component_1.ExamScoreDialog),
        __metadata("design:type", exam_score_dialog_component_1.ExamScoreDialog)
    ], ExamListComponent.prototype, "scoreDialog", void 0);
    ExamListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-lms-exam-list',
            template: "<div class=\"card card-w-title\">   <h1>{{'My exams'|translate}}</h1>   <p-dataList [value]=\"exams\" [paginator]=\"true\" [rows]=\"5\">     <ng-template let-exam pTemplate=\"item\">       <p-card>         <p-header>               <div class=\"head-exam\">               </div>             </p-header>         <div class=\"ui-g body-exam\">           <div class=\"ui-g-8\">             <h4>{{exam.name}}</h4>             <span class=\"e-status\">               {{EXAM_STATUS[exam.status] | translate}}             </span>             <h5 class=\"e-title\">{{'Summary'|translate}}</h5>             <p>               {{exam.summary}}             </p>             <h5 class=\"e-title\">{{'Instruction'|translate}}</h5>             <p [innerHTML]=\"exam.instruction\"></p>           </div>           <div class=\"ui-g-4\">             <p-card>               <ul class=\"list-cmt\">                 <li class=\"clearfix\">                   <i class=\"material-icons\">date_range</i>                   <span class=\"cmt-title\">{{'Start date'|translate}}</span>                   <span class=\"cmt-detail\">{{exam.start | date : \"dd/MM/yyyy\"}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">date_range</i>                   <span class=\"cmt-title\">{{'End date'|translate}}</span>                   <span class=\"cmt-detail\">{{exam.end | date : \"dd/MM/yyyy\"}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">alarm</i>                   <span class=\"cmt-title\">{{'Duration (mintes)'|translate}}</span>                   <span class=\"cmt-detail\">{{exam.duration}}</span>                 </li>                 <li class=\"clearfix\">                   <i class=\"material-icons\">done</i>                   <span class=\"cmt-title\">{{'Number of question'|translate}}</span>                   <span class=\"cmt-detail\">{{exam.question_count}}</span>                 </li>                 <li class=\"clearfix\" *ngIf=\"exam.member.role=='candidate'\">                   <i class=\"material-icons\">star</i>                   <span class=\"cmt-title\">{{'Score'|translate}}</span>                   <span class=\"cmt-detail\">{{exam.member.score}}</span>                 </li>               </ul>               <p-footer>                 <button pButton type=\"button\" icon=\"ui-icon-arrow-forward\" title=\"{{'Join'| translate}}\" label=\"{{'Join'|translate}}\" class=\" green-btn\" style=\"margin-right:4px;\" (click)=\"startExam(exam, exam.member)\" *ngIf=\"exam.member.role=='candidate'\" [disabled]=\"!exam.IsAvailable || exam.member.enroll_status=='completed'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-edit\" title=\"{{'Edit content'| translate}}\" label=\"{{'Edit content'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"editContent(exam)\" *ngIf=\"exam.member.role=='supervisor'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-star\" title=\"{{'Mark'| translate}}\" label=\"{{'Mark'|translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" (click)=\"markExam(exam)\" *ngIf=\"exam.member.role=='supervisor'\"></button>                 <button pButton type=\"button\" icon=\"ui-icon-timeline\" title=\"{{'Result'| translate}}\" label=\"{{'Result'|translate}}\" class=\"orange-btn\" style=\"margin-right:4px;\" *ngIf=\"exam.member.role=='supervisor'\" (click)=\"viewScore(exam)\"></button>               </p-footer>             </p-card>           </div>         </div>         <p-footer>                    </p-footer>       </p-card>     </ng-template>   </p-dataList>   <etraining-exam-marking-dialog></etraining-exam-marking-dialog>   <etraining-exam-content-dialog></etraining-exam-content-dialog>   <etraining-exam-score-dialog></etraining-exam-score-dialog>   <etraining-exam-study-dialog></etraining-exam-study-dialog> </div>",
            styles: [".mrg-bt{margin-bottom:15px}.head-exam{background-color:#e91e63}.head-exam button{margin:5px 0 5px 5px}.list-cmt{padding-left:0}.list-cmt li{list-style:none;padding:16px 24px;border-bottom:1px solid #dbdbdb}.list-cmt li i{font-size:24px;margin-right:8px;width:32px;vertical-align:middle;color:#757575}.list-cmt li .cmt-title{font-weight:700;margin-right:8px}.list-cmt li .cmt-detail{color:#757575;float:right}.e-title{font-size:15px}.e-status{background-color:#e91e63;border-radius:9px;padding:2px 8px;color:#fff}"],
        }),
        __metadata("design:paramtypes", [])
    ], ExamListComponent);
    return ExamListComponent;
}(base_component_1.BaseComponent));
exports.ExamListComponent = ExamListComponent;
