import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { PeopleService } from '../people.service';
import { Patient } from '../_visitmodels/patient';

@Injectable({
  providedIn: 'root'
})
export class ViewableVisitationrecordResolver implements Resolve<Patient[]|void> {
  constructor(private peopleService: PeopleService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Patient[]|void> {
    return this.peopleService.getPatients().pipe(catchError(async (err) => alert(err)));
  }
}
