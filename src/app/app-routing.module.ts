import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { SoftwaredevserviceComponent } from './softwaredevservice/softwaredevservice.component';
import { SerapismedicalComponent } from './serapismedical/serapismedical.component';
// import { LoginComponent} from './components/Login/Login.component';
import {AdminviewComponent} from './components/Portal/Admin/adminview/adminview.component';
import { DialogQuoteFormComponent } from './dialog-quote-form/dialog-quote-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent} from './components/Portal/Login/login/login.component';
import {FormComponent} from './components/form/form.component';
import { from } from 'rxjs';
import { PartnersComponent } from './partners/partners.component';

// import { MongoClient } from 'mongodb';

// estblish a connection
// MongoClient.connect(process.env.KB_ALPHA_DB_URI,
//     // TODO: Connection Pooling
//   // Set the poolSize to 50 connections.
//   // TODO: Timeouts
//   // Set the write timeout limit to 2500 milliseconds.
//   {useNewUrlParser: true},
//   console.log('On port: ' + process.env.PORT)

//   );

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'softwaredevservice', component: SoftwaredevserviceComponent} ,
   {path: 'about', component: SoftwaredevserviceComponent} ,
   {path: 'serapismedical', component: SerapismedicalComponent},
   {path: 'admin/login', component: LoginComponent},
   {path: 'admin/login/adminView', component: AdminviewComponent},
   {path: 'quoteform', component: FormComponent},
   {path: 'partners', component: PartnersComponent}
   // { path: '**', component: HomeComponent },
 // { path: '**', component: HomeComponent },  // Wildcard route for a 404 page[PAGE NOT FOUND]
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDialogModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
