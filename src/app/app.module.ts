import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { SoftwaredevserviceComponent } from './softwaredevservice/softwaredevservice.component';
import { SerapismedicalComponent } from './serapismedical/serapismedical.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ProcessanimationComponent } from './components/subcomponent/animation/processanimation/processanimation.component';
import { FinishanimationComponent } from './components/subcomponent/animation/finishanimation/finishanimation.component';
import { TechstackcomponentComponent } from './TechStack/techstackcomponent/techstackcomponent.component';
import { DevelopmentservicescomponentComponent } from './app/components/developmentservices/developmentservicescomponent.component';

export function playerFactory(){
    return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwaredevserviceComponent,
    SerapismedicalComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ProcessanimationComponent,
    FinishanimationComponent,
    TechstackcomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
