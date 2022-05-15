import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Patient } from './_visitmodels/patient';
import { Doctor } from './_visitmodels/doctors';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient){}

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${environment.visitAPI}/person/patient`);
  }

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${environment.visitAPI}/person/doctor`);
  }
}
