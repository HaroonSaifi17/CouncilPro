import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { HeroSectionComponent } from './home-page/hero-section/hero-section.component';
import { AboutSectionComponent } from './home-page/about-section/about-section.component';
import { ServiceSectionComponent } from './home-page/service-section/service-section.component';
import { ContactSectionComponent } from './home-page/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
