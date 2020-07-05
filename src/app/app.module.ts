import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { SoftwaredevserviceComponent } from './softwaredevservice/softwaredevservice.component';
import { SerapismedicalComponent } from './serapismedical/serapismedical.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwaredevserviceComponent,
    SerapismedicalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
