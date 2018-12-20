import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { IcareComponent } from './icare/icare.component';
import { MainSponsorsComponent } from './main-sponsors/main-sponsors.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Incident 2019' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Incident 2019 - Events' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Incident 2019 - About' }
  },
  {
    path: 'icare',
    component: IcareComponent,
    data: { title: 'Incident 2019 - iCare' }
  },
  {
    path: 'sponsors',
    component: MainSponsorsComponent,
    data: { title: 'Incident 2019 - iCare' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    TestimonialsComponent,
    EventsComponent,
    AboutComponent,
    IcareComponent,
    MainSponsorsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
