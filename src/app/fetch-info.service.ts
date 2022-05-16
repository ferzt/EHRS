import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {MedicalRecord} from './medical-record';
import {Demographics} from './demographics';
import {Vitals} from './vitals';
import {Medications} from './medications';
import {Procedure} from './procedure';
import {Directory} from './viewable-medrec-search-result/viewable-medrec-search-result.component';

@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  private baseURL = "http://localhost:3000";

  constructor(public http:HttpClient) { }

  getProcedure(patientID){
    const params = new HttpParams().set("id" ,patientID);
    return this.http.get<Procedure[]>(this.baseURL + "/getProcedure", {params});
  }

  getPatient(patientID:string){
    const params = new HttpParams().set("id" ,patientID);
    return this.http.get<Demographics>(this.baseURL + "/getPatientDemographic", {params});
  }

  getAllPatients(){
    // const params = new HttpParams().set("patient_id" ,patientID.toString());
    return this.http.get<Directory[]>(this.baseURL + "/getPatientDirectory");
  }

  getVitals(patientid){
    const params = new HttpParams().set("id" ,patientid);
    return this.http.get<Vitals[]>(this.baseURL + "/getVitals", {params});
  }

  getMedications(patientID){
    const params = new HttpParams().set("id" ,patientID);
    return this.http.get<Medications[]>(this.baseURL + "/getMedications", {params});
  }
}
