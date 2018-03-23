import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
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

    constructor(private eventManager: HomeEventManager) {
        super();
        this.header = {
            left: 'prev, today, next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    ngOnInit() {
    	this.isAdmin = this.authService.CurrentUser.login=='admin' || this.authService.CurrentUser.is_admin;
    }

}

