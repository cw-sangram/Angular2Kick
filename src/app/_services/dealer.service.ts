import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Dealer } from '../_models/data-model';
import { AppConfig } from "../app.config";

@Injectable()
export class DealerService {
    private _url = this.config.apiUrl + '/dealers/';
    constructor(private http: Http, private config: AppConfig) {
    }
    getDealers() {
        return this.http.get(this._url).map(res => res.json());
    }
    saveDealer(dealer: Dealer) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(dealer);
        return this.http.post(this._url, body, { headers }).map(res => res.json());
    }
}