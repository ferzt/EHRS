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
import { ViewableMedicalrecordsDemographicsComponent } from './viewable-medicalrecords-demographics/viewable-medicalrecords-demographics.component';
import { ViewableMedicalrecordsVitalsComponent } from './viewable-medicalrecords-vitals/viewable-medicalrecords-vitals.component';
import { ViewableMedicalrecordsMedicationsComponent } from './viewable-medicalrecords-medications/viewable-medicalrecords-medications.component';
import { ViewableMedicalrecordsLabsComponent } from './viewable-medicalrecords-labs/viewable-medicalrecords-labs.component';
import { ViewableMedicalrecordsDiagnosisComponent } from './viewable-medicalrecords-diagnosis/viewable-medicalrecords-diagnosis.component';
import { ViewableMedicalrecordsTreatmentComponent } from './viewable-medicalrecords-treatment/viewable-medicalrecords-treatment.component';
import { ViewableMedicalrecordsImagingComponent } from './viewable-medicalrecords-imaging/viewable-medicalrecords-imaging.component';
import { DoctorDiagnosisComponent } from './doctor-diagnosis/doctor-diagnosis.component';
import { DoctorOrderPrescriptionComponent } from './doctor-order-prescription/doctor-order-prescription.component';
import { DoctorOrderRadiologyComponent } from './doctor-order-radiology/doctor-order-radiology.component';
import { DoctorOrderLabtestComponent } from './doctor-order-labtest/doctor-order-labtest.component';
import { NurseLandingComponent } from './nurse-landing/nurse-landing.component';
import { DoctorLandingComponent } from './doctor-landing/doctor-landing.component';
import { DoctorOverwiewComponent } from './doctor-overwiew/doctor-overwiew.component';
import { NurseOverwiewComponent } from './nurse-overwiew/nurse-overwiew.component';
import { HttpClientModule } from '@angular/common/http';

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
    ViewablePatientcheckoutComponent,
    ViewableMedicalrecordsDemographicsComponent,
    ViewableMedicalrecordsVitalsComponent,
    ViewableMedicalrecordsMedicationsComponent,
    ViewableMedicalrecordsLabsComponent,
    ViewableMedicalrecordsDiagnosisComponent,
    ViewableMedicalrecordsTreatmentComponent,
    ViewableMedicalrecordsImagingComponent,
    DoctorDiagnosisComponent,
    DoctorOrderPrescriptionComponent,
    DoctorOrderRadiologyComponent,
    DoctorOrderLabtestComponent,
    NurseLandingComponent,
    DoctorLandingComponent,
    DoctorOverwiewComponent,
    NurseOverwiewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
