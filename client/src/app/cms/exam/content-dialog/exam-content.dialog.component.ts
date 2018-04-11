import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Group } from '../../../shared/models/group.model';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { Exam } from '../../../shared/models/exam.model';
import { Question } from '../../../shared/models/question.model';
import { QuestionSheet } from '../../../shared/models/question-sheet.model';
import { ExamGrade } from '../../../shared/models/exam-grade.model';
import { ExamQuestion } from '../../../shared/models/exam-question.model';
import { QuestionSelector } from '../../../shared/models/question-selector.model';
import { Http, Response } from '@angular/http';
import { QUESTION_SELECTION, GROUP_CATEGORY, EXAM_STATUS, QUESTION_TYPE, EXAM_MEMBER_STATUS, QUESTION_LEVEL } from '../../../shared/models/constants'
import { SelectItem, MenuItem } from 'primeng/api';
import * as _ from 'underscore';
import { TreeUtils } from '../../../shared/helpers/tree.utils';
import { TreeNode } from 'primeng/api';

@Component({
	moduleId: module.id,
	selector: 'exam-content-dialog',
	templateUrl: 'exam-content.dialog.component.html',
})
export class ExamContentDialog extends BaseComponent {

	display: boolean;
	tree: any;
	selectors:any;
	selectorGroups:any;
	selectedNodes: any;
	exam: Exam;
	sheet: QuestionSheet;
	grades: ExamGrade[];
	examQuestions: ExamQuestion[];
	groups: Group[];
	examStatus: SelectItem[];
	treeUtils: TreeUtils;
	QUESTION_LEVEL=QUESTION_LEVEL;
	totalScore: number;

	constructor() {
		super();
		this.initControl();
	}

	initControl() {
		this.treeUtils =  new TreeUtils();
		this.sheet = new QuestionSheet();
		this.grades = [];
		this.examQuestions = [];
		this.exam = new Exam();
		this.tree = {};
		this.selectors = [];
		this.selectorGroups = {};
		this.selectedNodes = {};
		this.examStatus = _.map(EXAM_STATUS, (val, key)=> {
            return {
                label: this.translateService.instant(val),
                value: key
            }
        });
        _.each(QUESTION_LEVEL, (val, key)=> {
        	this.selectorGroups[key] = {};
        	this.selectorGroups[key]["number"] = 0;
        	this.selectorGroups[key]["score"] = 0;
        	this.selectorGroups[key]["include_sub_group"] = true;
        	this.selectorGroups[key]["group_ids"] = [];
        	this.selectedNodes[key] =  [];
        });
	}

	nodeSelect(event: any, level) {
		this.selectorGroups[level]["group_ids"] = _.map(this.selectedNodes[level], (nodes=> {
			return _.map(nodes, ((node:any) => {
				return node["data"].id;
			}));
		}));
	}

	createExamQuestionFromQuestionBank(questions: Question[], score):Observable<any> {
		var createSubscriptions = _.map(questions, (question)=> {
			var examQuestion = new ExamQuestion();
			examQuestion.sheet_id = this.sheet.id;
			examQuestion.question_id = question.id;
			examQuestion.score = score;
			return examQuestion.save(this);
		});
		return Observable.zip(...createSubscriptions).flatMap(objArr => {
			var examQuestionIds = _.pluck(objArr, 'id');
			return ExamQuestion.array(this, examQuestionIds);
		});
	}

	generateQuestion() {
		this.sheet.finalized = true;
		this.sheet.save(this).subscribe(()=> {
			this.examQuestions = [];
			var subscriptions =[];
			_.each(this.selectors, (sel:QuestionSelector)=> {
				if (sel.group_id) {
					var selectedGroups = this.treeUtils.getSubGroup(this.groups, sel.group_id);
					var groupIds = _.pluck(selectedGroups, 'id');
					Question.listByGroups(this, groupIds).subscribe(questions => {
						if (sel.number) {
							questions = _.shuffle(questions);
							questions = _.filter(questions, (obj:Question)=> {
								return obj.level == sel.level;
							});
							questions = questions.slice(0, sel.number);
						}
						this.createExamQuestionFromQuestionBank(questions, sel.score).subscribe(examQuestions => {
							this.examQuestions =  this.examQuestions.concat(examQuestions);
							this.totalScore =  _.reduce(examQuestions, (memo, q:ExamQuestion)=>{ return memo + +q.score; }, 0);
						});
					});
				}
			});
		});
	}

	show(exam: Exam) {
		this.initControl();
		this.display = true;
		this.exam = exam;
		ExamGrade.listByExam(this, exam.id).subscribe(grades => {
			this.grades = grades;
		});
		QuestionSheet.byExam(this, exam.id).subscribe(sheet => {
			if (sheet) {
				this.sheet = sheet;
				ExamQuestion.listBySheet(this, this.sheet.id).subscribe(examQuestions=> {
					this.examQuestions = examQuestions;
					this.totalScore =  _.reduce(examQuestions, (memo, q)=>{ return memo + +q.score; }, 0);
				});
				Group.listByCategory(this, GROUP_CATEGORY.QUESTION).subscribe(groups => {
					this.groups = groups;
					QuestionSelector.listBySheet(this, this.sheet.id).subscribe(selectors=> {
						this.selectors = selectors;
						_.each(selectors, (sel)=> {
							this.selectorGroups[sel.level]["number"] = sel.number;
        					this.selectorGroups[sel.level]["score"] = sel.score;
        					this.selectorGroups[sel.level]["include_sub_group"] = sel.include_sub_group;
        					if (sel.group_id)
        						this.selectorGroups[sel.level]["group_ids"].push(sel.group_id);
						});
						_.each(QUESTION_LEVEL, (val, key)=> {
							this.tree[key] = this.treeUtils.buildTree(groups);
							if (sheet.finalized) 
								this.treeUtils.disableTree(this.tree[key]);
							this.selectedNodes[key] = _.map(this.selectorGroups[key]["group_ids"], (group_id=> {
								return this.treeUtils.findTreeNode(this.tree[key], group_id);
							}));
							console.log(this.selectedNodes[key] , key);
						});
					});
				});
				
			}
			else {
				this.sheet = new QuestionSheet();
				this.sheet.exam_id = exam.id;
				this.sheet.save(this).subscribe(sheet=> {
					this.sheet = sheet;
				});
			}
		});
	}

	hide() {
		this.display = false;
	}

	save() {
		var subscriptions = [];
		_.each(this.grades, (grade:ExamGrade)=> {
			subscriptions.push(grade.save(this));
		});
		_.each(QUESTION_LEVEL, (val, key)=> {
			let delSelectors:any = _.find(this.selectors, ((sel: QuestionSelector) => {
				return sel.level == key && !_.contains(this.selectorGroups[key]["group_ids"], sel.group_id);
			}));
			_.each(delSelectors, ((sel:QuestionSelector)=> {
				subscriptions.push(sel.delete(this));
			}));
			let updateSelectors:any = _.find(this.selectors, ((sel: QuestionSelector) => {
				return sel.level == key && _.contains(this.selectorGroups[key]["group_ids"], sel.group_id);
			}));
			_.each(updateSelectors, ((sel:QuestionSelector)=> {
				sel.sheet_id = this.sheet.id;
				sel.number =  this.selectorGroups[key]["number"];
				sel.score =  this.selectorGroups[key]["score"];
				sel.include_sub_group = this.selectorGroups[key]["include_sub_group"];		
				subscriptions.push(sel.save(this));
			}));
			var addSelectors = [];
			_.each(this.selectorGroups[key]["group_ids"], (group_id=> {
				var sel = _.find(this.selectors, ((sel:QuestionSelector) => {
					return sel.level == key && sel.group_id == group_id;
				}));
				if (!sel) {
					var newSel = new QuestionSelector();
					newSel.sheet_id = this.sheet.id;
					newSel.number =  this.selectorGroups[key]["number"];
					newSel.score =  this.selectorGroups[key]["score"];
					newSel.include_sub_group = this.selectorGroups[key]["include_sub_group"];
					subscriptions.push(newSel.save(this));
				}
			}));
		});
		return Observable.forkJoin(...subscriptions).subscribe(() => {
			this.hide();
			this.messageService.add({ severity: 'success', summary: 'Success', detail: this.translateService.instant('Content saved successfully.') });
		});
	}

	addGrade() {
		var grade = new ExamGrade();
		grade.exam_id = this.exam.id;
		this.grades.push(grade);
	}

	removeGrade(grade: ExamGrade) {
		if (grade.id) {
			grade.delete(this).subscribe(() => {
				this.grades = _.reject(this.grades, (obj)=> {
					return obj == grade;
				});
			})
		} else
			this.grades = _.reject(this.grades, (obj)=> {
				return obj == grade;
			});
	}
}