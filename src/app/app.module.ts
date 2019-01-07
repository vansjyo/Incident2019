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
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TimelineComponent } from './timeline/timeline.component';

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
    component: SponsorsComponent,
    data: { title: 'Incident 2019 - Sponsors' }
  }, {
    path: 'contact-us',
    component: ContactusComponent,
    data: { title: 'Incident 2019 - Contact Us' }
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    data: { title: 'Incident 2019 - Timeline' }
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
    SponsorsComponent,
    FooterComponent,
    ContactusComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
