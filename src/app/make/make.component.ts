import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Make, IMake } from '../_models/Make';
import { MakeService, AlertService } from "../_services/index";
@Component({
    moduleId: module.id,
    selector: 'add-make',
    templateUrl: 'make.component.html'
})

export class MakeComponent implements OnInit {
    make: Make = { id: 0, name: '', detail: '' };
    makes: IMake[];
    location: Location;
    submitted = false;
    curMake: Make = new Make();
    constructor(private _location: Location,
        private makeService: MakeService,
        private alertService: AlertService) {

    }

    addMake(newmake: string) {
        this.curMake.id = 0;
        this.curMake.name = newmake;
        this.makeService.saveMake(this.curMake).subscribe(
            data => {
                this.loadAllUsers();
            }
        );
        this.submitted = true;
    }
    goBack() {
        this._location.back();
    }
    ngOnInit(): void {
        this.loadAllUsers();
    }

    loadAllUsers() {
        this.makeService.getMakes().subscribe(
            (data) => (this.makes = data),
            (err) => console.log(err));
    }
}