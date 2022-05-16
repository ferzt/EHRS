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
import { ViewableVisitationrecordResolver } from './viewable-visitationrecord/viewable-visitationrecord.resolver';
import { DoctorDiagnosisComponent } from './doctor-diagnosis/doctor-diagnosis.component';
import { DoctorOrderPrescriptionComponent } from './doctor-order-prescription/doctor-order-prescription.component';
import { DoctorOrderRadiologyComponent } from './doctor-order-radiology/doctor-order-radiology.component';
import { DoctorOrderLabtestComponent } from './doctor-order-labtest/doctor-order-labtest.component';
import { DoctorNurseViewVisitationComponent } from './doctornurse-view-visitation/doctornurse-view-visitation.component';
import { DoctorNurseViewMedicalComponent } from './doctornurse-view-medical/doctornurse-view-medical.component';
import { DoctorLandingComponent } from './doctor-landing/doctor-landing.component';
import { DoctorOverwiewComponent } from './doctor-overwiew/doctor-overwiew.component';
import { NurseLandingComponent } from './nurse-landing/nurse-landing.component';
import { NurseOverwiewComponent } from './nurse-overwiew/nurse-overwiew.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:"full"},
  { path: 'home', component: HomeComponent, children: [
    { path: 'medrec-demographics', component: ViewableMedicalrecordsDemographicsComponent},
    { path: 'medrec-vitals', component: ViewableMedicalrecordsVitalsComponent },
    { path: 'medrec-medications', component: ViewableMedicalrecordsMedicationsComponent },
    { path: 'medrec-labs', component: ViewableMedicalrecordsLabsComponent },
    { path: 'medrec-diagnosis', component: ViewableMedicalrecordsDiagnosisComponent},
    { path: 'medrec-treatment', component: ViewableMedicalrecordsTreatmentComponent },
    { path: 'medrec-imaging', component: ViewableMedicalrecordsImagingComponent },
    {path: 'visitation-record', component: ViewableVisitationrecordComponent, resolve: {patients: ViewableVisitationrecordResolver}},
    {path: 'visitation-queue', component: ViewableVisitationqueueComponent},
    {path: 'checkout-patient', component: ViewableVisitationcheckoutComponent},
    {path: 'checkout', component: ViewablePatientcheckoutComponent},
    {path: 'diagnosis', component: DoctorDiagnosisComponent},
    {path: 'doctornurse-view-visitation', component: DoctorNurseViewVisitationComponent},
    {path: 'doctornurse-view-medical', component: DoctorNurseViewMedicalComponent},
    {path: 'order-prescription', component: DoctorOrderPrescriptionComponent},
    {path: 'order-radiology', component: DoctorOrderRadiologyComponent},
    {path: 'order-lab-test', component: DoctorOrderLabtestComponent},
    {path: 'nurselanding', component: NurseLandingComponent},
    {path: 'doctorlanding', component: DoctorLandingComponent},
    {path: 'DoctorOverview', component: DoctorOverwiewComponent},
    {path: 'NurseOverview', component: NurseOverwiewComponent}  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
