
import { Observable, Subject } from 'rxjs/Rx';
import { Model } from './decorator';
import { APIContext } from './context';
import { BaseModel } from './base.model';
import { Company } from './company.model';
import * as _ from 'underscore';

@Model('res.users')
export class User extends BaseModel{

    // Default constructor will be called by mapper
    constructor(){
        super();
		
		this.image = undefined;
		this.display_name = undefined;
        this.name = undefined;
		this.email = undefined;
        this.class_id = undefined;
        this.class_id__DESC__ = undefined;
		this.login = undefined;
        this.phone = undefined;
        this.is_admin = undefined;
        this.banned = undefined;
		this.role = undefined;
	}

    image:string;
    name:string;
    email: string;
    class_id: number;
    class_id__DESC__: string;
    login: string;
    phone: string;
    is_admin: boolean;
    banned: boolean;
    display_name: string;
    role: string;

    static countAll( context:APIContext): Observable<any[]> {
        return User.count(context,"[('login','!=','admin')]");
    }

    static countAdmin(context:APIContext):Observable<any> {
        return User.count(context, "[('is_admin','=',True)]");
    }

    static countStudent(context:APIContext):Observable<any> {
        return User.count(context, "[('role','=','student')]");
    }

    static countTeacher(context:APIContext):Observable<any> {
        return User.count(context, "[('role','=','teacher')]");
    }

    static listAdmin(context:APIContext):Observable<any> {
        return User.search(context, [],"[('is_admin','=',True)]");
    }

    static listStudent(context:APIContext):Observable<any> {
        return User.search(context, [], "[('role','=','student')]");
    }

    static listTeacher(context:APIContext):Observable<any> {
        return User.search(context, [], "[('role','=','teacher')]");
    }

    static listByClass(context:APIContext, classId):Observable<any> {
        return User.search(context,[], "[('class_id','=',"+classId+")]");
    }

}
