import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from 'src/app/_visitmodels/entry';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// model interface
export class VisitationQueueService {
  constructor(private http: HttpClient){}

  getQueue(): Observable<Entry[]>{
    console.log(environment.visitAPI);
    return this.http.get<Entry[]>(`${environment.visitAPI}/queue`);
  }
}
