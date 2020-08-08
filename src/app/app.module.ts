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
import { OurTeamComponent } from './Team/our-team/our-team.component';
import { LandingpagecomponentComponent } from './LandingPage/landingpagecomponent/landingpagecomponent.component';
import { PlatformofferingcomponentComponent } from './PlatformDevelopmentOfferings/platformofferingcomponent/platformofferingcomponent.component';
import {FormsModule} from '@angular/forms';
import { ScrollanimationComponent } from './components/subcomponent/animation/scrollanimation/scrollanimation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule, MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';

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
    OurTeamComponent,
    LandingpagecomponentComponent,
    PlatformofferingcomponentComponent,
    ScrollanimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
