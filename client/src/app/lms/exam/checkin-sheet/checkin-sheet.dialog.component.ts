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
})
export class CheckinSheetDialog extends BaseComponent {

    display: boolean;
    exam: Exam;
    members: ExamMember[];
    company: Company;

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
                    .header{}
                    .name-c{
                        float: left;
                    }

                    .name-c, .name-e{
                        text-align: center; 
                        text-transform: uppercase; 
                        font-weight: bold; 
                        margin-bottom: 10px; 
                    }
                    
                    .label{
                        float: left;
                        font-weight: bold;
                        
                    }

                    .title{
                        text-transform: uppercase;
                        float: left;
                        margin-right:40px;
                    }

                    .f-print{
                        border:none;
                        padding-top: 0;
                    }
                    
                    .l-question{
                        padding-bottom: 0;
                        margin-bottom: 0;
                    }

                    .l-question li{
                        list-style-type: decimal;
                    }
                </style>
            </head>
            <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }
   
}

