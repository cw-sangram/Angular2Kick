import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { AppConfig } from '../app.config';
import { Bike } from '../_models/bike';

@Injectable()
export class BikeService {
    private _url = this.config.apiUrl + '/bikes/'; 
    constructor(private http: Http, private config: AppConfig) { }
    getRequest() {
        return this.http.get(this._url).map(res => res.json());
    }
    getBikeDetail(id: number) {
        //return this.http.get(this._url+'/'+ id).map(res => res.json());
        return this.http.get(this.config.apiUrl + '/bikes/detail/'+id).map(res => res.json());
    }
    saveBike(bikeData: Bike)  {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(bikeData);
        return this.http.post(this._url, body, { headers });
        //return this.http.post(this._url, body, { headers }).subscribe(
        //    data => {
        //        console.log(data.json());
        //    }
        //);
        //return this.http.post(this._url, body, options).map((res: Response) => res.json());
        //return this.http.post(this._url, bikeData, options)
        //    .map(this.extractData)
        //    .catch(this.handleErrorObservable);
    }
    extractData(res: Response) {
        let body = res.json();
        return body;
    }

    handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}