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
var bike_service_1 = require("../_services/bike.service");
var AddMakeComponent = (function () {
    function AddMakeComponent(_location, bikeService) {
        this._location = _location;
        this.bikeService = bikeService;
        this.make = { id: 0, name: '', detail: '' };
        this.submitted = false;
    }
    AddMakeComponent.prototype.onSubmit = function () {
        this.bikeService.saveBike(this.make);
        this.submitted = true;
    };
    AddMakeComponent.prototype.goBack = function () {
        this._location.back();
    };
    AddMakeComponent.prototype.ngOnInit = function () {
    };
    return AddMakeComponent;
}());
AddMakeComponent = __decorate([
    core_1.Component({
        selector: 'add-make',
        templateUrl: 'bike/create/'
    }),
    __metadata("design:paramtypes", [common_1.Location, bike_service_1.BikeService])
], AddMakeComponent);
exports.AddMakeComponent = AddMakeComponent;
//# sourceMappingURL=add-make.component.js.map