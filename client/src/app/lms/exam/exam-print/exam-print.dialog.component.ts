import { Component, OnInit, Input, ViewChild, QueryList, ViewChildren, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Exam } from '../../../shared/models/exam.model';
import { Question } from '../../../shared/models/question.model';
import { ExamQuestion } from '../../../shared/models/exam-question.model';
import { Answer } from '../../../shared/models/answer.model';
import { ExamGrade } from '../../../shared/models/exam-grade.model';
import { Submission } from '../../../shared/models/submission.model';
import { Company } from '../../../shared/models/company.model';
import { Http, Response } from '@angular/http';
import { QuestionContainerDirective } from '../../../assessment/question/question-template/question-container.directive';
import { IQuestion } from '../../../assessment/question/question-template/question.interface';
import { QuestionRegister } from '../../../assessment/question/question-template/question.decorator';
import * as _ from 'underscore';
import { QuestionSheet } from '../../../shared/models/question-sheet.model';


@Component({
    moduleId: module.id,
    selector: 'exam-print-dialog',
    templateUrl: 'exam-print.dialog.component.html',
    styleUrls: ['exam-print.dialog.component.css'],
})
export class ExamPrintDialog extends BaseComponent {

    display: boolean;
    exam: Exam;
    examQuestions: ExamQuestion[];
    company: Company;

     @ViewChildren(QuestionContainerDirective) questionsComponents: QueryList<QuestionContainerDirective>;
     @ViewChild('printSection') printSection;

    constructor(private componentFactoryResolver:ComponentFactoryResolver) {
        super();
        this.exam = new Exam();
        this.company =  new Company();
        this.examQuestions = [];
    }

    show(exam: Exam) {
        this.company = this.cacheService.UserCompany;
        this.display = true;
        this.exam = exam;
        QuestionSheet.byExam(this, this.exam.id).subscribe(sheet => {
            ExamQuestion.listBySheet(this, sheet.id).subscribe(examQuestions => {
                this.examQuestions =  examQuestions;
                setTimeout(()=>{
                    var componentHostArr =  this.questionsComponents.toArray();
                    for (var i =0;i<examQuestions.length;i++) {
                        var examQuestion =  examQuestions[i];
                        var componentHost = componentHostArr[i];
                        this.displayQuestion(examQuestion,componentHost);
                    }
                }, 0);        
            });
        });
    }

    displayQuestion(examQuestion: ExamQuestion, componentHost) {
        Question.get(this, examQuestion.question_id).subscribe((question)=> {
            var detailComponent = QuestionRegister.Instance.lookup(question.type);
            let viewContainerRef = componentHost.viewContainerRef;
            if (detailComponent) {
                let componentFactory = this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                viewContainerRef.clear();
                var componentRef = viewContainerRef.createComponent(componentFactory);
                (<IQuestion>componentRef.instance).mode = 'print';
                (<IQuestion>componentRef.instance).render(question);
            }
        });
    }

    hide() {
        this.display = false;
    }

    print() {
        let printContents, popupWin;
        printContents = this.printSection.nativeElement.innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Exam paper</title>
              <style>
              //........Customized style.......
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }

}

