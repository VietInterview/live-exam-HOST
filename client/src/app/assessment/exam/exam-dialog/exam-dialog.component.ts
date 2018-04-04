import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { BaseDialog } from '../../../shared/components/base/base.dialog';
import { Exam } from '../../../shared/models/exam.model';
import { ExamMember } from '../../../shared/models/exam-member.model';
import { Http, Response } from '@angular/http';
import { DEFAULT_DATE_LOCALE, EXAM_STATUS, EXAM_MEMBER_ROLE, EXAM_MEMBER_STATUS } from '../../../shared/models/constants'
import { SelectItem, MenuItem } from 'primeng/api';
import * as _ from 'underscore';
import { TabPanel } from 'primeng/tabview';

@Component({
    moduleId: module.id,
    selector: 'exam-dialog',
    templateUrl: 'exam-dialog.component.html',
})
export class ExamDialog extends BaseDialog<Exam> {

    rangeDates: Date[];
    locale:any;
    examStatus: SelectItem[];
    examStartDateTime: Date;
    examEndDateTime: Date;

    constructor(private http: Http) {
        super();
        this.locale = DEFAULT_DATE_LOCALE;
        this.examStatus = _.map(EXAM_STATUS, (val, key)=> {
            return {
                label: val,
                value: key
            }
        });
    }

    ngOnInit() {
        this.onShow.subscribe(object => {
            if (object.start && object.end) {
                this.rangeDates = [object.start,object.end];
            }
            var lang = this.translateService.currentLang;
            this.http.get(`/assets/i18n/calendar.${lang}.json`)
            .subscribe((res: Response) => {
                this.locale = res.json();
            });
        });
    }

    onDateSelect($event) {
        // if (this.rangeDates[0] && this.rangeDates[1]) {
        //     this.object.start = this.rangeDates[0];
        //     this.object.end = this.rangeDates[1];
        // }
        // if(this.examStartDateTime) {
        //     console.log('start date time'+ this.examStartDateTime.getDate() + this.examStartDateTime.getMonth() +
        //     + this.examStartDateTime.getFullYear() + this.examStartDateTime.getHours() + this.examStartDateTime.getMinutes());
        // }
        // if(this.examEndDateTime) {
        //     console.log('end date time' + this.examEndDateTime);
        // }

        if(this.examStartDateTime && this.examEndDateTime) {
            this.object.start = this.examStartDateTime;
            this.object.end = this.examEndDateTime;
        }
    }

}


