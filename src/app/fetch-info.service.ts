import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {MedicalRecord} from './medical-record';
import {Demographics} from './demographics';

@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  private baseURL = "localhost:3000";

  constructor(public http:HttpClient) { }

  getMedicalRecord(patientID:number){
    const params = new HttpParams().set("patient_id" ,patientID.toString());
    return this.http.get<MedicalRecord[]>(this.baseURL + "/api/medicalrecord", {params});
  }
}
