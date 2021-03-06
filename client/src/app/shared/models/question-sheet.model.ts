import { GROUP_CATEGORY} from './constants';
import { BaseModel } from './base.model';
import { Observable, Subject } from 'rxjs/Rx';
import { Model,FieldProperty } from './decorator';
import { APIContext } from './context';

@Model('liveexam.question_sheet')
export class QuestionSheet extends BaseModel{

    // Default constructor will be called by mapper
    constructor(){
        super();
		
        this.exam_id = undefined;
        this.seed = undefined;
        this.finalized = undefined;
	}
    exam_id: number;
    seed:number;
    finalized:boolean;

    static byExam( context:APIContext, examId: number): Observable<any> {
        return QuestionSheet.search(context,[],"[('exam_id','=',"+examId+")]").map(sheets =>{
            return sheets.length ? sheets[0]: null;
        });
    }
}
