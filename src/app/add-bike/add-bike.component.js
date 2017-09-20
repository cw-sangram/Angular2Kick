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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var AddBikeComponent = (function () {
    function AddBikeComponent(_location, bikeService, router, activatedRoute) {
        this._location = _location;
        this.bikeService = bikeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bike = { id: 0, name: '', detail: '' };
        this.submitted = false;
    }
    AddBikeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bikeService.saveBike(this.bike).subscribe(function (data) {
            _this.router.navigate(['/showbikes']);
            _this.submitted = true;
        });
    };
    AddBikeComponent.prototype.goBack = function () {
        this._location.back();
    };
    AddBikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id != undefined && _this.id > 0) {
                _this.bikeService.getBikeDetail(_this.id).subscribe(function (fetched) { return _this.bike = fetched; });
            }
        });
    };
    return AddBikeComponent;
}());
AddBikeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-bike',
        templateUrl: 'add-bike.component.html'
    }),
    __metadata("design:paramtypes", [common_1.Location,
        bike_service_1.BikeService,
        router_1.Router,
        router_1.ActivatedRoute])
], AddBikeComponent);
exports.AddBikeComponent = AddBikeComponent;
//# sourceMappingURL=add-bike.component.js.map