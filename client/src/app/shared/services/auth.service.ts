import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { Credential } from '../models/credential.model';
import { User } from '../models/user.model';
import { MapUtils } from '../helpers/map.utils';
import { APIService } from './api.service'

@Injectable()
export class AuthService {

    constructor(private apiService: APIService) {
    }

    get StoredCredential(): Credential {
        if (localStorage.getItem('credential'))
            return MapUtils.deserialize(Credential, JSON.parse(atob(localStorage.getItem('credential'))));
        else
            return new Credential();
    }

    set StoredCredential(credential: Credential) {
        localStorage.setItem('credential', btoa(JSON.stringify(credential)));
    }

    get CurrentUser(): User {
        if (localStorage.getItem('currentUser'))
            return MapUtils.deserialize(User, JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem('currentUser'))))));
        else
            return new User();
    }

    set CurrentUser(user: User) {
        localStorage.setItem('currentUser', btoa(unescape(encodeURIComponent(JSON.stringify(user)))));
    }

    get Remember(): boolean {
        if (localStorage.getItem('remember'))
            return localStorage.getItem('remember')=='true';
        else
            return false;
    }

    set Remember(val: boolean) {
        localStorage.setItem('remember', val.toString());
    }

    saveCredential(info: Credential, remember: boolean) {
        this.StoredCredential =  info;
        this.Remember = remember;
    }

    login(info: Credential): Observable<User> {
        return this.apiService.login(info.username, info.password).map(user => {
            this.CurrentUser = MapUtils.deserialize(User, user);
            return this.CurrentUser;
        });
    }

    resetPass(email: string): Observable<any> {
        return this.apiService.resetPass(email);
    }

    changePass(old_pass: string, new_pass: string): Observable<any> {
        return this.apiService.changePass(this.CurrentUser.id, old_pass, new_pass);
    }

    logout() {
        localStorage.removeItem('currentUser');
        if (!this.Remember)
            this.StoredCredential = new Credential();
    }



}
