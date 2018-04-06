import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import * as _ from 'underscore';
import { GROUP_CATEGORY, EXAM_STATUS } from '../../../shared/models/constants'
import { Exam } from '../../../shared/models/exam.model';
import { ExamMember } from '../../../shared/models/exam-member.model';
import { ExamQuestion } from '../../../shared/models/exam-question.model';
import { Group } from '../../../shared/models/group.model';
import { Submission } from '../../../shared/models/submission.model';
import { SelectItem } from 'primeng/api';
import { ExamContentDialog } from '../../../cms/exam/content-dialog/exam-content.dialog.component';
import { ExamStudyDialog} from '../exam-study/exam-study.dialog.component';
import { ExamScoreDialog } from '../exam-score/exam-score.dialog.component';
import { ExamPrintDialog } from '../exam-print/exam-print.dialog.component';
import { QuestionSheet } from '../../../shared/models/question-sheet.model';
import { CheckinSheetDialog } from '../checkin-sheet/checkin-sheet.dialog.component';


@Component({
    moduleId: module.id,
    selector: 'lms-exam-list',
    templateUrl: 'exam-list.component.html',
    styleUrls: ['exam-list.component.css'],
})
export class ExamListComponent extends BaseComponent implements OnInit {

    exams: Exam[];
    EXAM_STATUS = EXAM_STATUS;
    @ViewChild(ExamContentDialog) examContentDialog:ExamContentDialog;
    @ViewChild(ExamStudyDialog) examStudyDialog:ExamStudyDialog;
    @ViewChild(ExamScoreDialog) scoreDialog:ExamScoreDialog;
    @ViewChild(ExamPrintDialog) printDialog:ExamPrintDialog;
    @ViewChild(CheckinSheetDialog) checkinDialog:CheckinSheetDialog;

    constructor() {
        super();
        this.exams = [];
    }

    ngOnInit() {
        ExamMember.listByUser(this, this.authService.CurrentUser.id).subscribe(members => {
            members = _.filter(members, (member => {
                return member.exam_id;
            });
            var examIds = _.pluck(members,'exam_id');
            Exam.array(this, examIds)
            .subscribe(exams => {
                _.each(exams, (exam)=> {
                    exam.member = _.find(members, (member:ExamMember)=> {
                        return member.exam_id == exam.id;
                    });
                    exam.member.examScore(this, exam.id).subscribe(score=> {
                        exam.member.score = score;
                    });
                    ExamQuestion.countByExam(this, exam.id).subscribe(count => {
                        exam.question_count = count;
                    });
                });
                this.exams = _.filter(exams, (exam)=> {
                     return exam.member.role=='teacher' || (exam.member.role=='student' && exam.status == 'published'  && exam.mode == 'online');
                });
            });
        });
    }

    editContent(exam:Exam) {
        this.examContentDialog.show(exam);
    }

    viewScore(exam:Exam) {
        this.scoreDialog.show(exam);
    }

    printExam(exam:Exam) {
        QuestionSheet.byExam(this, exam.id).subscribe(sheet => {
            if (!sheet || !sheet.finalized) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.instant('Exam not finalized.') });
                return;
            }
            this.printDialog.show(exam);
        });
    }

    printCheckin(exam:Exam) {
        this.checkinDialog.show(exam);
    }

    startExam(exam:Exam, member: ExamMember) {
        this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to start ?'),
                accept: () => {
                    this.examStudyDialog.show(exam, member);
                }
            });
        
    }
}