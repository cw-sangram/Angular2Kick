import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SessionService {

    isSetUserSession(): boolean {
        return !!localStorage.getItem('user');
    }

    clearUserSession() {
        localStorage.removeItem('user');
    }

    //setUserSession(user: IUser) {
    //    localStorage.setItem('user', JSON.stringify(user));
    //}
}