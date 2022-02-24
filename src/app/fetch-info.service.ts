import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  private baseURL = "baseURL";

  constructor(public http:HttpClient) { }
}
