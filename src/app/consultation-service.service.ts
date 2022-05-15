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

}
