import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
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
import 'rxjs/add/observable/timer'; import * as _ from 'underscore';
import { ExamGrade } from '../../../shared/models/exam-grade.model';


@Component({
    moduleId: module.id,
    selector: 'result-report-print-dialog',
    templateUrl: 'result-report-print.dialog.component.html',
    styleUrls: ['result-report-print.dialog.component.css'],
})
export class ResultReportPrintDialog extends BaseComponent {

    display: boolean;
    exam: Exam;
    members: ExamMember[];
    company: Company;
    records: any;

    @ViewChild('printSection') printSection;

    constructor() {
        super();
        this.display = false;
        this.exam = new Exam();
        this.company = new Company();
        this.members = [];
    }

    show(exam: Exam) {
        if (exam.id) {
            this.display = true;
            this.company = this.cacheService.UserCompany;
            this.exam = exam;
            ExamMember.listStudentByExam(this, this.exam.id).subscribe(members => {
                ExamGrade.listByExam(this, this.exam.id).subscribe(grades => {
                    this.records = members;
                    _.each(members, (member: ExamMember) => {
                        member["user_login"] = member.login;
                        member["user_name"] = member.name;
                        member["user_group"] = member.class_id__DESC__;
                        member.examScore(this, this.exam.id).subscribe(score => {
                            member["score"] = score;
                        });
                    });
                    console.log(this.records);
                });
            });
        }
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
                    .a{}
                    .header{
                        text-align: center;
                        font-weight: bold; 
                        margin-bottom: 20px;
                    }

                    .header p, .name-c p{
                        margin: 0;
                    }

                    .name-c{
                        float: left;
                        width: 50%;
                    }

                    .name-e{

                    }

                    .name-c, .name-e{
                        text-align: center; 
                        text-transform: uppercase; 
                        font-weight: bold; 
                        margin-bottom: 20px; 
                    }

                    .date{
                        text-align: right;
                        margin-bottom: 10px;
                        margin-top: 10px; 
                    }

                    .date span{
                        font-style: italic;
                    }
                    
                    .width-title{
                        width:50%;
                        float: left;
                    }

                    .center{
                        text-align: center;
                    }

                    table{
                        width: 100%;
                        margin-top: 20px;
                        border-collapse: collapse;
                    }

                    table tr, th, td{
                        border: 1px solid black;
                        padding: 5px;
                    }

                    .total{
                        display: none;
                    }
                </style>
            </head>
            <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }

}

