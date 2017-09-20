import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MakeComponent } from "./make/make.component";


import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { DealerDetailComponent } from "./Dealer/dealer-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddBikeComponent } from "./add-bike/add-bike.component";
import { TestComponent } from "./test/test.component";
import { ShowBikesComponent } from "./showbikes/show-bikes.component";
import { DynamicFormTestComponent } from "./dynamic-form-test/dynamic-form-test.component";

const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full', data: { title: 'My Home' }},
    { path: 'dashboard', component: DashboardComponent, data: { title: 'My Dashboard' } },
    { path: 'addbike', component: AddBikeComponent },
    { path: 'addbike/:id', component: AddBikeComponent },
    { path: 'showbikes', component: ShowBikesComponent, data: { title: 'Show all bikes' } },
    { path: 'managemakes', component: MakeComponent, data: { title: 'Manage all makes' }},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dealerdetail', component: DealerDetailComponent },
    { path: 'testpage', component: TestComponent },
    { path: 'dynamicform', component: DynamicFormTestComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }