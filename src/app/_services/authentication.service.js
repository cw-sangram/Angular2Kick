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
var app_config_1 = require("../app.config");
var Rx_1 = require("rxjs/Rx");
var AuthenticationService = (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
        this.signedIn = new Rx_1.BehaviorSubject(false);
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this._isLoggedIn = true;
            this.signedIn.next(true);
        }
        else {
            this._isLoggedIn = false;
            this.signedIn.next(false);
        }
    }
    Object.defineProperty(AuthenticationService.prototype, "isSignedIn", {
        get: function () {
            return this.signedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        debugger;
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                debugger;
                _this.signedIn.next(true);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.signedIn.next(false);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map