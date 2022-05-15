import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visit } from './_visitmodels/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  addVisit(visit: Visit): Observable<string>{
    return this.http.post<string>(`${environment.visitAPI}/visit`, visit);
  }
}
