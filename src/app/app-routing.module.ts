import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Home/home/home.component';
import {SoftwaredevserviceComponent} from './softwaredevservice/softwaredevservice.component';
import {SerapismedicalComponent} from './serapismedical/serapismedical.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'softwaredevservice', component: SoftwaredevserviceComponent} ,
   {path: 'about', component: SoftwaredevserviceComponent} ,
   {path: 'serapismedical', component: SerapismedicalComponent},
   // { path: '**', component: HomeComponent },
 // { path: '**', component: HomeComponent },  // Wildcard route for a 404 page[PAGE NOT FOUND]
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
