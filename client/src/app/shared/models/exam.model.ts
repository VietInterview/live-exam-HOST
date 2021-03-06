import { GROUP_CATEGORY} from './constants';
import { BaseModel } from './base.model';
import { Observable, Subject } from 'rxjs/Rx';
import { Model,FieldProperty } from './decorator';
import { APIContext } from './context';
import { ExamQuestion } from './exam-question.model';
import * as _ from 'underscore';

@Model('liveexam.exam')
export class Exam extends BaseModel{

    // Default constructor will be called by mapper
    constructor(){
        super();
		
		this.name = undefined;
		this.summary = undefined;
		this.instruction = undefined;
        this.start = undefined;
        this.end = undefined;
        this.status = undefined;
        this.scale = undefined;
        this.duration = undefined;
        this.max_attempt = undefined;
        this.allow_navigation = undefined;
        this.publish_score = undefined;
        this.subject = undefined;
        this.mode = undefined;
        this.code = undefined;
        this.degree = undefined;
	}

    name:string;
    summary: string;
    instruction: string;
    mode: string;
    subject: string;
    code: string;
    degree: string;
    @FieldProperty<Date>()
    start: Date;
    @FieldProperty<Date>()
    end: Date;

    selector_id: number;
    scale: number;
    status: string;
    duration: number;
    max_attempt: number;
    allow_navigation: boolean;
    publish_score: boolean;

    get IsAvailable():boolean {
        if (this.status !='published')
            return false;
        var now = new Date();
        if (this.end.getTime() < now.getTime())
            return false;
        return true;
    }

}
