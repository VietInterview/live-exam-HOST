import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Exam } from '../../../shared/models/exam.model';
import { Answer } from '../../../shared/models/answer.model';
import { ExamGrade } from '../../../shared/models/exam-grade.model';
import { Submission } from '../../../shared/models/submission.model';
import { ExamMember } from '../../../shared/models/exam-member.model';
import { Http, Response } from '@angular/http';
import { AnswerSheetDialog } from '../answer-sheet/answer-sheet.dialog.component';
import { AnswerPrintDialog } from '../answer-print/answer-print.dialog.component';

import * as _ from 'underscore';

@Component({
    moduleId: module.id,
    selector: 'exam-score-dialog',
    templateUrl: 'exam-score.dialog.component.html',
})
export class ExamScoreDialog extends BaseComponent {

    display: boolean;
    exam: Exam;
    records: any;
    selectedRecord: any;

    @ViewChild(AnswerSheetDialog) answerSheetDialog:AnswerSheetDialog;
    @ViewChild(AnswerPrintDialog) answerPrintDialog:AnswerPrintDialog;

    constructor() {
        super();
    }

    show(exam: Exam) {
        this.display = true;
        this.exam = exam;
        this.loadAnswers();
    }

    hide() {
        this.display = false;
    }

    redoExam() {
        if (this.selectedRecord) {
            this.selectedRecord.enroll_status = 'in-progress';
            this.selectedRecord.save(this).subscribe(()=> {
                Submission.byMember(this, this.selectedRecord.id).subscribe((submit:Submission) => {
                    if (submit)
                        submit.delete(this).subscribe(()=> {
                           this.messageService.add({ severity: 'success', summary: 'Success', detail: this.translateService.instant('Action completed.') });
                        });
                    else
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.translateService.instant('Action completed.') });

                });
            });
        }

    }

    viewAnswerSheet() {
        if (this.selectedRecord)
            this.answerSheetDialog.show(this.exam, this.selectedRecord);
    }

    printAnswerSheet() {
        if (this.selectedRecord)
            this.answerPrintDialog.show(this.exam, this.selectedRecord);
    }

    loadAnswers() {
        ExamGrade.listByExam(this, this.exam.id).subscribe(grades => {
            ExamMember.listStudentByExam(this, this.exam.id).subscribe(members => {
                this.records = members;
                _.each(members, (member: ExamMember)=> {
                    member.examScore(this, this.exam.id).subscribe(score=> {
                        member["score"] = score;
                        var grade = member.examGrade(grades, score);
                        if (grade)
                              member["grade"] = grade.name;
                    });
                });
            });
        });
    }

}

