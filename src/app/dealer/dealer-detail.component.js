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
var forms_1 = require("@angular/forms");
var index_1 = require("../_services/index");
var DealerDetailComponent = (function () {
    function DealerDetailComponent(fb, dealerService) {
        this.fb = fb;
        this.dealerService = dealerService;
        this.states = ['Maharashra', 'Goa', 'UP', 'Punjab'];
        this.createForm();
    }
    DealerDetailComponent.prototype.ngOnInit = function () {
    };
    DealerDetailComponent.prototype.createForm = function () {
        this.dealerForm = this.fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
            address: this.fb.group({
                street: ['', forms_1.Validators.required],
                city: ['', forms_1.Validators.required],
                state: ['', forms_1.Validators.required],
            }),
            pin: ['', forms_1.Validators.pattern('[0-9]{5}')],
            contact: this.fb.group({
                mobile: ['', forms_1.Validators.required],
                phone: ['', forms_1.Validators.required],
            })
        });
    };
    DealerDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.dealerForm.valid) {
            console.log('form submitted');
            //this.dealer = this.prepareDealer();
            //this.dealerService.saveDealer(this.dealer).subscribe(/* error handling */);
            //this.ngOnChanges();
        }
        else {
            debugger;
            Object.keys(this.dealerForm.controls).map(function (controlName) {
                _this.dealerForm.get(controlName).markAsTouched({ onlySelf: true });
            });
            this.validateAllFormFields(this.dealerForm);
        }
    };
    DealerDetailComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    DealerDetailComponent.prototype.prepareDealer = function () {
        var formModel = this.dealerForm.value;
        debugger;
        // deep copy of form model lairs
        //const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
        //    (address: Address) => Object.assign({}, address)
        //);
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        var saveDealer = {
            id: this.dealer.id,
            name: formModel.name,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: [] // secretLairsDeepCopy
        };
        return saveDealer;
    };
    DealerDetailComponent.prototype.ngOnChanges = function () {
        this.dealerForm.reset({
            name: this.dealer.name
        });
        //this.setAddresses(this.hero.addresses);
    };
    return DealerDetailComponent;
}());
DealerDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dealer-detail',
        templateUrl: 'dealer-detail.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, index_1.DealerService])
], DealerDetailComponent);
exports.DealerDetailComponent = DealerDetailComponent;
//# sourceMappingURL=dealer-detail.component.js.map