import { Component, OnInit, Input,ViewChild} from '@angular/core';
import { Observable}     from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { User } from '../../../shared/models/user.model';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Exam } from '../../../shared/models/exam.model';
import { ExamMember } from '../../../shared/models/exam-member.model';
import { Http, Response } from '@angular/http';
import { DEFAULT_DATE_LOCALE, EXAM_STATUS, EXAM_MEMBER_ROLE, EXAM_MEMBER_STATUS } from '../../../shared/models/constants'
import {SelectItem, MenuItem} from 'primeng/api';
import * as _ from 'underscore';
import { SelectStudentsDialog } from '../../../shared/components/select-student-dialog/select-student-dialog.component';
import { SelectTeachersDialog } from '../../../shared/components/select-teacher-dialog/select-teacher-dialog.component';

@Component({
	moduleId: module.id,
	selector: 'exam-enrollment-dialog',
	templateUrl: 'enrollment-dialog.component.html',
})
export class ExamEnrollDialog extends BaseComponent {

	display: boolean;
	processing: boolean;
	exam: Exam;
    students: ExamMember[];
    selectedCandidate: ExamMember;
    teachers: ExamMember[];
    selectedSupervisor: ExamMember;
    EXAM_MEMBER_ROLE = EXAM_MEMBER_ROLE;
    EXAM_STATUS =  EXAM_STATUS;
    EXAM_MEMBER_STATUS = EXAM_MEMBER_STATUS;

    @ViewChild(SelectStudentsDialog) studentsDialog: SelectStudentsDialog;
	@ViewChild(SelectTeachersDialog) teachersDialog: SelectTeachersDialog;

	constructor() {
		super();
	}

	enroll(exam:Exam) {
		this.display = true;
		this.processing = false;
		this.exam = exam;
		this.loadMembers();
	}

	hide() {
		this.display = false;
	}


	 add(role:string) {
        var usersDialog = role=='teacher'? this.teachersDialog : this.studentsDialog;
        usersDialog.show();
        usersDialog.onSelectUsers.subscribe(users => {
            this.processing = true;
            var subscriptions = [];
            _.each(users, (user:User)=> {
                var member = new ExamMember();
                member.exam_id = this.exam.id;
                member.user_id = user.id;
                member.date_register =  new Date();
                member.status = 'active';
                subscriptions.push(member.save(this));
            });
            Observable.forkJoin(...subscriptions).subscribe(()=> {
                this.processing = false;
                this.loadMembers();
            });
        });
    }

    delete(member:ExamMember) {
        if (member)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: () => {
                    member.delete(this).subscribe(()=> {
                        this.selectedCandidate = null;
                        this.selectedSupervisor = null;
                        this.loadMembers();
                    })
                }
            });
    }

    loadMembers() {
        ExamMember.listByExam(this, this.exam.id).subscribe(members => {
             this.students = _.filter(members, (member)=> {
                 return member.role =='student';
             });
             this.teachers = _.filter(members, (member)=> {
                 return member.role =='teacher';
             });
        });
    }
}

