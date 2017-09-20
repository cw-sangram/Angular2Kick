import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';

import { FooterComponent } from "./footer/footer.component";
import { MakeComponent } from "./make/make.component";

import { AppConfig } from './app.config';
import { AlertComponent, HighlighterDirectiveComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { DealerDetailComponent } from "./Dealer/dealer-detail.component";

import {
    BikeService, MakeService, AlertService, AuthenticationService, UserService,
    DealerService, SessionService, TestService
} from './_services/index';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AddBikeComponent } from "./add-bike/add-bike.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { ShowBikesComponent } from "./showbikes/show-bikes.component";
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';
import { DynamicFormComponent } from "./dynamicform/dynamicform.component";


@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule, ReactiveFormsModule  ],
    declarations: [AppComponent,
        DashboardComponent,
        ShowBikesComponent,
        AddBikeComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        MakeComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DealerDetailComponent,
        HighlighterDirectiveComponent,
        TestComponent,
        DynamicFormComponent,
        DynamicFormTestComponent
    ],
    providers: [BikeService,
        MakeService,
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        DealerService,
        SessionService,
        TestService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
