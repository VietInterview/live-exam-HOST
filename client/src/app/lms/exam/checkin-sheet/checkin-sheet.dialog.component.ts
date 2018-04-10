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

@Component({
    moduleId: module.id,
    selector: 'checkin-sheet-dialog',
    templateUrl: 'checkin-sheet.dialog.component.html',
    styleUrls: ['checkin-sheet.dialog.component.css'],
})
export class CheckinSheetDialog extends BaseComponent {

    display: boolean;
    exam: Exam;
    members: ExamMember[];
    company: Company;

    @ViewChild('printSection') printSection;

    constructor() {
        super();
        this.display = false;
        this.exam = new Exam();
        this.company = new Company();
        this.members = [];
    }

    show(exam: Exam) {
        this.display = true;
        this.company = this.cacheService.UserCompany;
        this.exam = exam;
        ExamMember.listStudentByExam(this, this.exam.id).subscribe(members => {
            this.members = members;
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
                    .a{}
                    .header, .p-sign, .sup{
                        text-align: center;
                        font-weight: bold; 
                        margin-bottom: 10px;
                    }

                    .header p{
                        margin: 0;
                    }

                    .name-c, .p-sign{
                        float: left;
                        width: 50%;
                    }

                    .name-e{

                    }

                    .name-c, .name-e{
                        text-align: center; 
                        text-transform: uppercase; 
                        font-weight: bold; 
                        margin-bottom: 10px; 
                    }

                    .date{
                        text-align: right;
                    }

                    .date span{
                        font-style: italic;
                    }

                    .label{
                        float: left;    
                    }

                    .title{
                        font-weight: bold;
                        float: left;
                        margin-right:70px;
                    }
                    
                    table{
                        width: 100%;
                        margin-top: 20px;
                        border-collapse: collapse;
                    }

                    table tr, th, td{
                        border: 1px solid black;
                    }

                    .total{
                        display: none;
                    }

                    .t-sign{
                        float: right;
                        width: 50%;
                        text-align: center;
                    }

                    .sign1{
                        padding-right: 100px;
                    }
                </style>
            </head>
            <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }
   
}

