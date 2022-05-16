import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewableAreaComponent } from './viewable-area/viewable-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ViewableMedicalrecordsDemographicsComponent} from './viewable-medicalrecords-demographics/viewable-medicalrecords-demographics.component';
import {ViewableMedicalrecordsDiagnosisComponent} from './viewable-medicalrecords-diagnosis/viewable-medicalrecords-diagnosis.component';
import {ViewableMedicalrecordsImagingComponent} from './viewable-medicalrecords-imaging/viewable-medicalrecords-imaging.component';
import {ViewableMedicalrecordsLabsComponent} from './viewable-medicalrecords-labs/viewable-medicalrecords-labs.component';
import {ViewableMedicalrecordsMedicationsComponent} from './viewable-medicalrecords-medications/viewable-medicalrecords-medications.component';
import {ViewableMedicalrecordsTreatmentComponent} from './viewable-medicalrecords-treatment/viewable-medicalrecords-treatment.component';
import {ViewableMedicalrecordsVitalsComponent} from './viewable-medicalrecords-vitals/viewable-medicalrecords-vitals.component';
import { ViewableVisitationrecordComponent } from './viewable-visitationrecord/viewable-visitationrecord.component';
import { ViewableVisitationcheckoutComponent } from './viewable-visitationcheckout/viewable-visitationcheckout.component';
import { ViewableVisitationqueueComponent } from './viewable-visitationqueue/viewable-visitationqueue.component';
import { ViewablePatientcheckoutComponent } from './viewable-patientcheckout/viewable-patientcheckout.component';
import { DoctorDiagnosisComponent } from './doctor-diagnosis/doctor-diagnosis.component';
import { DoctorOrderPrescriptionComponent } from './doctor-order-prescription/doctor-order-prescription.component';
import { DoctorOrderRadiologyComponent } from './doctor-order-radiology/doctor-order-radiology.component';
import { DoctorOrderLabtestComponent } from './doctor-order-labtest/doctor-order-labtest.component';
import { ViewableMedicalRecordComponent } from './viewable-medical-record/viewable-medical-record.component';
import { ViewableMedicalRecordLookupComponent } from './viewable-medical-record-lookup/viewable-medical-record-lookup.component';
import { ViewableMedrecSearchResultComponent } from './viewable-medrec-search-result/viewable-medrec-search-result.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:"full"},
  { path: 'home', component: HomeComponent, children: [
    { path: 'medical-records', component: ViewableMedicalRecordComponent, children: [
      { path: 'demographics', component: ViewableMedicalrecordsDemographicsComponent},
      { path: 'vitals', component: ViewableMedicalrecordsVitalsComponent },
      { path: 'medications', component: ViewableMedicalrecordsMedicationsComponent },
      { path: 'labs', component: ViewableMedicalrecordsLabsComponent },
      { path: 'diagnosis', component: ViewableMedicalrecordsDiagnosisComponent},
      { path: 'treatment', component: ViewableMedicalrecordsTreatmentComponent },
      { path: 'imaging', component: ViewableMedicalrecordsImagingComponent }
    ]},
    {path: 'medrec-lookup', component: ViewableMedicalRecordLookupComponent},
    {path: 'medrec-result', component: ViewableMedrecSearchResultComponent},
    {path: 'visitation-record', component: ViewableVisitationrecordComponent},
    {path: 'visitation-queue', component: ViewableVisitationqueueComponent},
    {path: 'checkout-patient', component: ViewableVisitationcheckoutComponent},
    {path: 'checkout', component: ViewablePatientcheckoutComponent},
    {path: 'diagnosis', component: DoctorDiagnosisComponent},
    {path: 'order-prescription', component: DoctorOrderPrescriptionComponent},
    {path: 'order-radiology', component: DoctorOrderRadiologyComponent},
    {path: 'order-lab-test', component: DoctorOrderLabtestComponent}  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
