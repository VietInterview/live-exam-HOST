import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Config } from '../../env.config';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class APIService {
    constructor(private http: Http) { }

    login(username: string, password: string):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/login', JSON.stringify({ username: username, password: password }), options)
            .map((response: Response) => response.json());
    }

    resetPass(email: string):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/resetpass', JSON.stringify({ email: email }), options)
            .map((response: Response) => response.json());
    }

    changePass(user_id: number, old_pass: string, new_pass:string):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/changepass', JSON.stringify({ user_id: user_id, old_pass: old_pass, new_pass: new_pass }), options)
            .map((response: Response) => response.json());
    }

    create(model:string, object:any):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/create', JSON.stringify({ model: model, values:object  }), options)
            .map((response: Response) => response.json());
    }

    update(model:string, id:number, object:any):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/update', JSON.stringify({ model: model, values:object, id:id  }), options)
            .map((response: Response) => response.json());
    }

    delete(model:string, id:number):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/delete', JSON.stringify({ model: model, id:id  }), options)
            .map((response: Response) => response.json());
    }

    search(model:string, fields:string[], domain:string): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/search_read', JSON.stringify({ model: model,fields:fields, domain: domain  }), options)
            .map((response: Response) => response.json());
    }

    count(model:string, domain:string): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/search_count', JSON.stringify({ model: model, domain: domain  }), options)
            .map((response: Response) => response.json());
    }

    get(model:string, id:number, fields:string[]): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/read', JSON.stringify({ model: model,fields:fields, ids:[id]  }), options)
            .map((response: Response) => response.json()[0]);
    }

    list(model:string, ids:number[], fields:string[]): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/read', JSON.stringify({ model: model,fields:fields, ids:ids  }), options)
            .map((response: Response) => response.json());
    }

    execute(model:string, method :string, paramList: string[], paramdDict: any ):Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_ENDPOINT + '/execute', JSON.stringify({ model: model, method: method, paramList: paramList, paramdDict: paramdDict  }), options)
            .map((response: Response) => {
                return response.json();
            });
    }

    upload(file: any, cloudid: number):Observable<any>{
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('cloudid', cloudid.toString());
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
       // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`${Config.API_ENDPOINT}/file`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error));
    }
}
