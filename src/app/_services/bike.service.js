"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var app_config_1 = require("../app.config");
var BikeService = (function () {
    function BikeService(http, config) {
        this.http = http;
        this.config = config;
        this._url = 'api/bikes/';
    }
    BikeService.prototype.getRequest = function () {
        return this.http.get(this._url).map(function (res) { return res.json(); });
    };
    BikeService.prototype.getBikeDetail = function (id) {
        //return this.http.get(this._url+'/'+ id).map(res => res.json());
        return this.http.get(this.config.apiUrl + '/bikes/detail/' + id).map(function (res) { return res.json(); });
    };
    BikeService.prototype.saveBike = function (bikeData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(bikeData);
        return this.http.post(this._url, body, { headers: headers });
        //return this.http.post(this._url, body, { headers }).subscribe(
        //    data => {
        //        console.log(data.json());
        //    }
        //);
        //return this.http.post(this._url, body, options).map((res: Response) => res.json());
        //return this.http.post(this._url, bikeData, options)
        //    .map(this.extractData)
        //    .catch(this.handleErrorObservable);
    };
    BikeService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    BikeService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    BikeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    return BikeService;
}());
BikeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], BikeService);
exports.BikeService = BikeService;
//# sourceMappingURL=bike.service.js.map