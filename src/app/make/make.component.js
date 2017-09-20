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
var common_1 = require("@angular/common");
var Make_1 = require("../_models/Make");
var index_1 = require("../_services/index");
var MakeComponent = (function () {
    function MakeComponent(_location, makeService, alertService) {
        this._location = _location;
        this.makeService = makeService;
        this.alertService = alertService;
        this.make = { id: 0, name: '', detail: '' };
        this.submitted = false;
        this.curMake = new Make_1.Make();
    }
    MakeComponent.prototype.addMake = function (newmake) {
        var _this = this;
        this.curMake.id = 0;
        this.curMake.name = newmake;
        this.makeService.saveMake(this.curMake).subscribe(function (data) {
            _this.loadAllUsers();
        });
        this.submitted = true;
    };
    MakeComponent.prototype.goBack = function () {
        this._location.back();
    };
    MakeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    MakeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.makeService.getMakes().subscribe(function (data) { return (_this.makes = data); }, function (err) { return console.log(err); });
    };
    return MakeComponent;
}());
MakeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-make',
        templateUrl: 'make.component.html'
    }),
    __metadata("design:paramtypes", [common_1.Location,
        index_1.MakeService,
        index_1.AlertService])
], MakeComponent);
exports.MakeComponent = MakeComponent;
//# sourceMappingURL=make.component.js.map