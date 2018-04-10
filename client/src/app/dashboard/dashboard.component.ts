import {Component,ViewChild, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { BaseComponent } from '../shared/components/base/base.component';
import { HomeEventManager } from '../home/home-manager.service';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import * as _ from 'underscore';
import { GROUP_CATEGORY, EXAM_STATUS } from '../shared/models/constants'
import { Exam } from '../shared/models/exam.model';
import { Group } from '../shared/models/group.model';
import { ExamDialog } from '../assessment/exam/exam-dialog/exam-dialog.component';
import { SelectItem } from 'primeng/api';




@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'

})
export class DashboardComponent extends BaseComponent implements OnInit{

    isAdmin:boolean;
    header:any;
    events: any;
    exams: Exam[];
    selectedExam: any;

    @ViewChild(ExamDialog) examDialog: ExamDialog;

    constructor() {
        super();
        this.header = {
            left: 'prev, today, next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    ngOnInit() {
        this.loadExams();
    	this.isAdmin = this.authService.CurrentUser.login=='admin' || this.authService.CurrentUser.is_admin;
    }

    add() {
        var exam = new Exam();
        this.examDialog.show(exam);
        this.examDialog.onCreateComplete.subscribe(() => {
            this.loadExams();
        });
    }

    edit() {
        if (this.selectedExam)
            this.examDialog.show(this.selectedExam);
        this.examDialog.onUpdateComplete.subscribe(() => {
            this.loadExams();
        });
    }

    onDayClick() {
        this.add();
    }

    onEventClick(event) {
        var examId = event.calEvent.id;
        this.selectedExam = _.find(this.exams, (exam)=> {
            return exam.id == examId;
        });
        this.edit();
    }

    loadExams() {
        Exam.all(this).subscribe(exams => {
            this.exams = exams;
            this.events = _.map(exams, (exam)=> {
                return {
                    title: exam.name,
                    start: exam.start,
                    send: exam.end,
                    id: exam.id,
                    allDay: true
                }
            });
        });
    }

}

