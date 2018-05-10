import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Exam } from '../../../shared/models/exam.model';
import { ExamQuestion } from '../../../shared/models/exam-question.model';
import { Answer } from '../../../shared/models/answer.model';
import { Submission } from '../../../shared/models/submission.model';
import { Question } from '../../../shared/models/question.model';
import { QuestionSheet } from '../../../shared/models/question-sheet.model';
import { ExamMember } from '../../../shared/models/exam-member.model';
import { Http, Response } from '@angular/http';
import { Company } from '../../../shared/models/company.model';
import { QuestionContainerDirective } from '../../../assessment/question/question-template/question-container.directive';
import { IQuestion } from '../../../assessment/question/question-template/question.interface';
import { QuestionRegister } from '../../../assessment/question/question-template/question.decorator';
import 'rxjs/add/observable/timer'; import * as _ from 'underscore';
import { QuestionOption } from '../../../shared/models/option.model';

@Component({
    moduleId: module.id,
    selector: 'answer-summary-print-dialog',
    templateUrl: 'answer-summary-print.dialog.component.html',
    styleUrls: ['answer-summary-print.dialog.component.css'],
})
export class AnswerSummaryPrintDialog extends BaseComponent {
    display: boolean;
    qIndex: number;
    ansCorrect: number;
    examQuestions: ExamQuestion[];
    answers: Answer[];
    member: ExamMember;
    company: Company;
    exam: Exam;
    submission: Submission;
    mode: any;
    options: QuestionOption[];

    @ViewChildren(QuestionContainerDirective) questionsComponents: QueryList<QuestionContainerDirective>;
    @ViewChild('printSection') printSection;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        super();
        this.display = false;
        this.examQuestions = [];
        this.answers = [];
        this.exam = new Exam();
        this.company = new Company();
        this.member = new ExamMember();

    }

    show(exam: Exam, member: ExamMember) {
        this.company = this.cacheService.UserCompany;
        this.display = true;
        this.examQuestions = [];
        this.answers = [];
        this.exam = exam;
        this.member = member;
        this.qIndex = 0;
        this.ansCorrect = 0;
        Submission.byMember(this, this.member.id).subscribe((submit: Submission) => {
            if (submit) {
                this.submission = submit;
                this.startReview();
            }
        });
    }

    hide() {
        this.display = false;
    }

    fetchAnswers(): Observable<any> {
        if (this.submission.id)
            return Answer.listBySubmit(this, this.submission.id);
        else
            return Observable.of([]);
    }

    startReview() {
        QuestionSheet.byExam(this, this.exam.id).subscribe(sheet => {
            ExamQuestion.listBySheet(this, sheet.id).map(examQuestions => {
                var offset = this.member.id;
                return _.map(examQuestions, (obj, order) => {
                    var index = (offset + sheet.seed + order) % examQuestions.length;
                    return examQuestions[index];
                });
            }).subscribe(examQuestions => {
                this.examQuestions = examQuestions;
                this.fetchAnswers().subscribe(answers => {
                    this.answers = answers;
                    setTimeout(() => {
                        var componentHostArr = this.questionsComponents.toArray();
                        for (var i = 0; i < examQuestions.length; i++) {
                            var examQuestion = examQuestions[i];
                            var componentHost = componentHostArr[i + 1];
                            this.displayQuestion(examQuestion, componentHost);
                            this.qIndex = Math.floor(this.examQuestions.length / 4);
                            if (this.qIndex == 0) {
                                this.qIndex = 1;
                            }
                        }
                    }, 0);
                    if (this.answers != []) {
                        this.examQuestions.forEach((obj: any) => {
                            this.answers.forEach(anw => {
                                if (obj.question_id == anw.question_id) {
                                    obj.option_id = anw.option_id;
                                    QuestionOption.listByQuestion(this, obj.question_id).subscribe(options => {
                                        var param = this.member.id;
                                        options = _.map(options, (opt, order) => {
                                            var index = (param + order) % options.length;
                                            return options[index];
                                        });
                                        var index = _.findIndex(options, (opt: any) => {
                                            return anw.option_id == opt.id;
                                        });
                                        if (index == 0) {
                                            obj.indexAnw = "A";
                                        } else if (index == 1) {
                                            obj.indexAnw = "B";
                                        } else if (index == 2) {
                                            obj.indexAnw = "C";
                                        } else {
                                            obj.indexAnw = "D";
                                        }
                                        if(anw.is_correct == true){
                                            this.ansCorrect++;
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            });
        });
    }

    prepareAnswer(question: ExamQuestion): Observable<any> {
        var answer = _.find(this.answers, (ans: Answer) => {
            return ans.question_id == question.question_id;
        });
        if (!answer)
            answer = new Answer();
        return Observable.of(answer);
    }

    displayQuestion(examQuestion: ExamQuestion, componentHost) {
        Question.get(this, examQuestion.question_id).subscribe((question) => {
            this.prepareAnswer(examQuestion).subscribe(answer => {
                var detailComponent = QuestionRegister.Instance.lookup(question.type);
                let viewContainerRef = componentHost.viewContainerRef;
                if (detailComponent) {
                    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                    viewContainerRef.clear();
                    var componentRef = viewContainerRef.createComponent(componentFactory);
                    (<IQuestion>componentRef.instance).mode = 'review';
                    (<IQuestion>componentRef.instance).render(question, answer, { seed: this.member.id });
                }
            });

        });
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
                    .header{
                    }
                    .m10{
                        margin-bottom: 10px;
                    }

                    .m30{
                        margin-bottom: 30px;
                    }

                    .w50{
                        width: 50%;
                        float: left;
                    }

                    .w30{
                        width: 33%;
                        float: left;
                    }

                    .label{
                        font-weight: bold;
                    }

                    .content{
                        text-transform: uppercase;
                    }

                    .align{
                        text-align: center;
                    }
                    
                    .float{
                        float: left;
                    }

                    .answer table{
                        border-collapse: collapse;
                        text-align: center;
                        float: left;
                        margin-right: 20px;
                        width:22%;
                    }

                    .answer table tr, th, td{
                        border: 1px solid black !important;
                        padding: 5px;
                    }
                </style>
            </head>
            <body onload="window.print();window.close()">${printContents}
            </body>
          </html>`
        );
        popupWin.document.close();
    }
}



