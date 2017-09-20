import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class TestService {
    data: any;
    my_data: any;
    private _url = 'api/makes/';
    constructor(private http: Http) {
    }
    getMakes() {
        return this.http.get(this._url).map(res => res.json());
    }

    public getResponseData(): Promise<any> {
        if (typeof (this.my_data) === "undefined") {
            return this.http.get('app/data.json')
                .toPromise().then(res => {
                    this.my_data = res.json().response;
                    return this.my_data;
                });
        } else {
            return Promise.resolve(this.my_data);
        }

    }
}