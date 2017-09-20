import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Make } from '../_models/make';
import { AppConfig } from "../app.config";

@Injectable()
export class MakeService {
        data: any;
    private _url = this.config.apiUrl +'/makes/'; 
    constructor(private http: Http,private config: AppConfig) {
    }
    getMakes() {
        return this.http.get(this._url).map(res => res.json());      
    }
    saveMake(makeData: Make) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(makeData);
        return this.http.post(this._url, body, { headers }).map(res => res.json());
    }
}