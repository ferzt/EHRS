import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewableAreaComponent } from './viewable-area/viewable-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewableVisitationrecordComponent } from './viewable-visitationrecord/viewable-visitationrecord.component';
import { ViewableVisitationcheckoutComponent } from './viewable-visitationcheckout/viewable-visitationcheckout.component';
import { ViewableVisitationqueueComponent } from './viewable-visitationqueue/viewable-visitationqueue.component';
import { ViewablePatientcheckoutComponent } from './viewable-patientcheckout/viewable-patientcheckout.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:"full"},
  { path: 'home', component: HomeComponent, children: [
    { path: 'viewable', component: ViewableAreaComponent },
    {path: 'visitation-record', component: ViewableVisitationrecordComponent},
    {path: 'visitation-queue', component: ViewableVisitationqueueComponent},
    {path: 'checkout-patient', component: ViewableVisitationcheckoutComponent},
    {path: 'checkout', component: ViewablePatientcheckoutComponent}  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
