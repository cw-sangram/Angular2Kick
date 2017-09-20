import { Component, OnInit } from '@angular/core';
import { TestService } from "../_services/index";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    ngOnInit(): void {

        this.testService.getResponseData().then((value) => {
            //SUCCESS
            console.log(value);
            this.detailsdata = value;

        }, (error) => {
            //FAILURE
            console.log(error);
        })
    }

    title: string = 'DashboardComponent';
    detailsdata: any;
    constructor(private testService: TestService) {
       
    }
}