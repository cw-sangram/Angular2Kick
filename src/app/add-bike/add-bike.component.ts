import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeService } from "../_services/bike.service";
import { Router, Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Bike } from '../_models/bike';
@Component({
    moduleId: module.id,
    selector: 'add-bike',
    templateUrl: 'add-bike.component.html'
})

export class AddBikeComponent implements OnInit {
    bike: Bike = { id: 0, name: '', detail :'' };
    location: Location;
    submitted = false;
    id: number;
    constructor(private _location: Location,
        private bikeService: BikeService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }

    onSubmit() {
        this.bikeService.saveBike(this.bike).subscribe(
            data => {
                this.router.navigate(['/showbikes']);
                this.submitted = true;
            }
        );
    }
    goBack() {
        this._location.back();
    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params =>
        {
            this.id = params['id'];
            if (this.id != undefined && this.id>0) {
                this.bikeService.getBikeDetail(this.id).subscribe(
                    fetched => this.bike = fetched);
            }
        });
    }
}