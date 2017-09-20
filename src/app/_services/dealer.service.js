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
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var app_config_1 = require("../app.config");
var DealerService = (function () {
    function DealerService(http, config) {
        this.http = http;
        this.config = config;
        this._url = 'api/dealers/';
    }
    DealerService.prototype.getDealers = function () {
        return this.http.get(this.config.apiUrl + this._url).map(function (res) { return res.json(); });
    };
    DealerService.prototype.saveDealer = function (dealer) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(dealer);
        return this.http.post(this.config.apiUrl + this._url, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DealerService;
}());
DealerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], DealerService);
exports.DealerService = DealerService;
//# sourceMappingURL=dealer.service.js.map