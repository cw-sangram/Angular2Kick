import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address, Dealer, Contact } from "../_models/data-model";
import { DealerService } from "../_services/index";


@Component({
    moduleId: module.id,
    selector: 'dealer-detail',
    templateUrl: 'dealer-detail.component.html'
})

export class DealerDetailComponent implements OnInit {
    dealerForm: FormGroup;
    dealer: Dealer;
    private formSubmitAttempt: boolean;
    states: any[] = ['Maharashra', 'Goa', 'UP', 'Punjab'];

    constructor(private fb: FormBuilder, private dealerService: DealerService) {
        this.createForm();
    }

    ngOnInit() {

    }

    createForm() {
        this.dealerForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            address: this.fb.group({
                street: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
            }),
            pin: ['', Validators.pattern('[0-9]{5}')],
            contact: this.fb.group({
                mobile: ['', Validators.required], 
                phone: ['', Validators.required],
            })
        });
    }

    onSubmit() {
        if (this.dealerForm.valid) {
            console.log('form submitted');
            //this.dealer = this.prepareDealer();
            //this.dealerService.saveDealer(this.dealer).subscribe(/* error handling */);
            //this.ngOnChanges();
        } else {
            Object.keys(this.dealerForm.controls).map((controlName) => {
                this.dealerForm.get(controlName).markAsTouched({ onlySelf: true });
            });
            this.validateAllFormFields(this.dealerForm); 
        }
    }

    validateAllFormFields(formGroup: FormGroup) {         
        Object.keys(formGroup.controls).forEach(field => {  
            const control = formGroup.get(field);            
            if (control instanceof FormControl) {             
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        
                this.validateAllFormFields(control);  
            }
        });
    }

    prepareDealer(): Dealer {
        const formModel = this.dealerForm.value;
        // deep copy of form model lairs
        //const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
        //    (address: Address) => Object.assign({}, address)
        //);

        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        const saveDealer: Dealer = {
            id: this.dealer.id,
            name: formModel.name as string,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: []// secretLairsDeepCopy
        };
        return saveDealer;
    }

    ngOnChanges() {
        this.dealerForm.reset({
            name: this.dealer.name
        });
        //this.setAddresses(this.hero.addresses);
    }
}

