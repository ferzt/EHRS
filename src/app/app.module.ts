import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { ViewableAreaComponent } from './viewable-area/viewable-area.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewableVisitationrecordComponent } from './viewable-visitationrecord/viewable-visitationrecord.component';
import { ViewableVisitationqueueComponent } from './viewable-visitationqueue/viewable-visitationqueue.component';
import { ViewableVisitationcheckoutComponent } from './viewable-visitationcheckout/viewable-visitationcheckout.component';
import { ViewablePatientcheckoutComponent } from './viewable-patientcheckout/viewable-patientcheckout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ViewableAreaComponent,
    MenuComponent,
    PageNotFoundComponent,
    ViewableVisitationrecordComponent,
    ViewableVisitationqueueComponent,
    ViewableVisitationcheckoutComponent,
    ViewablePatientcheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
