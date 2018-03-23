import { Observable, Subject } from 'rxjs/Rx'
import { Group } from '../models/group.model';
import { ExamLog } from '../models/log.model';
import * as _ from 'underscore';
import { Injectable } from '@angular/core';

@Injectable()
export class ReportUtils {

	constructor() {
	}

	createRowGroupMetaData(records: any, key: string) {
		var rowGroupMetadata = {};
		if (records) {
			for (let i = 0; i < records.length; i++) {
				let rowData = records[i];
				let value = rowData[key];
				if (i == 0) {
					rowGroupMetadata[key] = { index: 0, size: 1 };
				}
				else {
					let previousRowData = records[i - 1];
					let previousRowGroup = previousRowData[key];
					if (value === previousRowGroup)
						rowGroupMetadata[key].size++;
					else
						rowGroupMetadata[key] = { index: i, size: 1 };
				}
			}
		}
		return rowGroupMetadata;
	}

	analyzeExamActivity(logs: ExamLog[]) {
		var onTime = 0;
		var startCourseUnitLogs = _.filter(logs, (log)=> {
			return log.start && log.code =='START_EXAM';
		});
		var endCourseUnitLogs = _.filter(logs, (log)=> {
			return log.start && log.code =='FINISH_EXAM';
		});
		var first_attempt = _.min(startCourseUnitLogs, (log)=> {
			return log.start.getTime();
		});
		var last_attempt = _.max(startCourseUnitLogs, (log)=> {
			return log.start.getTime();
		});
		_.each(logs, (log)=> {
			if (log.code == 'FINISH_EXAM')
				onTime += log.start.getTime();
			if (log.code == 'START_EXAM')
				onTime -= log.start.getTime();
		});
		return [first_attempt, last_attempt, onTime];
	}

}
