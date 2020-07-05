import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Home/home/home.component';
import {SoftwaredevserviceComponent} from './softwaredevservice/softwaredevservice.component';
import {SerapismedicalComponent} from './serapismedical/serapismedical.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'softwaredevservice', component: SoftwaredevserviceComponent} ,
   {path: 'serapismedical', component: SerapismedicalComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
