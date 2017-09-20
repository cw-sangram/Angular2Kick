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
var index_1 = require("../_services/index");
var Observable_1 = require("rxjs/Observable");
var TestComponent = (function () {
    function TestComponent(makeService) {
        this.makeService = makeService;
        this.height = 0;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.list = [];
        this.statesList = JSON.parse('[{"id":1,"name":"Honda","detail":null,"isActive":false},{"id":2,"name":"Hero","detail":null,"isActive":false},{"id":3,"name":"Bajaj","detail":null,"isActive":false},{"id":4,"name":"Royal Enfield","detail":null,"isActive":false}]');
        this.count$ = Observable_1.Observable.of(10);
    };
    TestComponent.prototype.addItem = function (item) {
        this.list.unshift(item);
        this.newItem = '';
        return false;
    };
    TestComponent.prototype.deleteItem = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
            }
        }
    };
    TestComponent.prototype.onChange = function (id, deviceValue, height) {
        //debugger;
        //this.height = this.height ? 0 : height
        if (id == 'state') {
            if (deviceValue == '1') {
                //expend the panel...
                this.isOpen = true;
                this.height = height;
            }
            else {
                //collapse the panel...
                this.isOpen = false;
                this.height = 0;
            }
        }
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-user',
        template: "<form>\no/p{{ condition }}\n    <div id=\"mylist\" class=\"w3-container w3-light-grey w3-padding-16\">\n        <button (click)='addItem(item.value);'>ADD ITEM</button>\n        <input type=\"text\" [(ngModel)]=newItem #item name='item'>\n        <ul class=\"w3-ul\">\n           <li class=\"w3-padding-16\" *ngFor = 'let item of list'>{{item}} <button class=\"btn w3-right w3-margin-right\" (click)='deleteItem(item)'>x</button></li>\n  </ul>\n  </div>\n<button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"height = height ? 0 : my.scrollHeight\">Toggle collapse\n    </button>\n<div id=\"demo\" class=\"block\" [style.height]=\"height + 'px'\" #my>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </div>\n<select id=\"state\" name=\"state\"\n        [(ngModel)]=\"stateId\"    \n        (change)=\"onChange($event.target.id, $event.target.value, my.scrollHeight)\"\n        class=\"form-control\">\n        <option *ngFor=\"let r of statesList\"\n            value=\"{{ r.id }}\">{{ r.name }}\n        </option>\n</select>\n  </form>",
        styles: ["\n    .block {\n      overflow: hidden;\n      -webkit-transition: height .5s;\n      transition: height .5s;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [index_1.MakeService])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map