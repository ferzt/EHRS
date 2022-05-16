import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultationServiceService {

  constructor(private http : HttpClient) { }

  getDiagnosisList(){
    return this.http.get('http://localhost:3000/DiagnosisList')
  }

  getVisitationHistory(patientid:string){
    return this.http.get('http://localhost:3000/VisitationHistory', {params:{patientid:patientid}})
  }
  
  getMedicalRecord(patientid:string){
    return this.http.get('http://localhost:3000/MedicalRecord', {params:{patientid:patientid}})
  }

  getDoctorID(){
    return this.http.get('http://localhost:3000/doctorID')
  }

  getNurseID(){
    return this.http.get('http://localhost:3000/nurseID')
  }

  addOrder(orderResource){
    return this.http.post('http://localhost:3000/order', orderResource)
  }

  updateVisitSummary(visitResource){
    return this.http.put('http://localhost:3000/updateVisitSummary', visitResource)
  }
}
