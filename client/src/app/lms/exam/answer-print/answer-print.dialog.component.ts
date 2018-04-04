import { Component, OnInit, Input, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';
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

@Component({
    moduleId: module.id,
    selector: 'answer-print-dialog',
    templateUrl: 'answer-print.dialog.component.html',
})
export class AnswerPrintDialog extends BaseComponent {

    display: boolean;
    qIndex: number;
    examQuestions: ExamQuestion[];
    answers: Answer[];
    member: ExamMember;
    company: Company;
    exam: Exam;
    submission: Submission;

     @ViewChildren(QuestionContainerDirective) questionsComponents: QueryList<QuestionContainerDirective>;

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
        this.display = true;
        this.exam = exam;
        this.member = member;
        this.qIndex = 0;
        Submission.byMember(this, this.member.id).subscribe((submit:Submission) => {
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
                return _.map(examQuestions, (obj, order)=> {
                    var index = (offset + sheet.seed*order)%examQuestions.length;
                    return examQuestions[index];
                });
            }).subscribe(examQuestions => {
                this.examQuestions = examQuestions;
                this.fetchAnswers().subscribe(answers => {
                    this.answers = answers;
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
        });
    }

    prepareAnswer(question: ExamQuestion): Observable<any> {
        var answer = _.find(this.answers, (ans: Answer)=> {
            return ans.question_id == question.question_id;
        });
        if (!answer)
            answer = new Answer();
        return Observable.of(answer);
    }

    displayQuestion(examQuestion: ExamQuestion, componentHost) {
        Question.get(this, examQuestion.question_id).subscribe((question)=> {
            this.prepareAnswer(examQuestion).subscribe(answer => {
                var detailComponent = QuestionRegister.Instance.lookup(question.type);
                let viewContainerRef = componentHost.viewContainerRef;
                if (detailComponent) {
                    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                    viewContainerRef.clear();
                    var componentRef = viewContainerRef.createComponent(componentFactory);
                    (<IQuestion>componentRef.instance).mode = 'review';
                    (<IQuestion>componentRef.instance).render(question,answer);
                }
            });
            
        });
    }

}

