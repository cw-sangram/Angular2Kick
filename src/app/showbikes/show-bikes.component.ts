import { Component, OnInit } from '@angular/core';

import { Bike, IBike  } from '../_models/bike';
import { BikeService } from '../_services/index';
@Component({
    moduleId: module.id,
    selector: 'show-bikes',
    templateUrl: 'show-bikes.component.html'
})

export class ShowBikesComponent implements OnInit {
    bikes: IBike[];
    promiseBikes: Promise<Bike[]>
    errorMessage: string;
    constructor(private bikeService: BikeService) {

    }

    ngOnInit(): void {
        this.bikeService.getRequest().subscribe(res => this.bikes = res);
    }
    edited($event: any) {
        alert($event);
    }
}