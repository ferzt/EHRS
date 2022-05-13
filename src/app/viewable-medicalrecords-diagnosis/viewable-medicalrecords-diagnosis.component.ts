import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MedicalRecord} from '../medical-record';
import {Demographics} from '../demographics';
import {FetchInfoService} from '../fetch-info.service';

@Component({
  selector: 'app-viewable-medicalrecords-diagnosis',
  templateUrl: './viewable-medicalrecords-diagnosis.component.html',
  styleUrls: ['./viewable-medicalrecords-diagnosis.component.css']
})
export class ViewableMedicalrecordsDiagnosisComponent implements OnInit {

  public numPages = 5;
  public pageStart = 1;
  private testDate = new Date();
  public currPage = 0;

  public testMedicalRecord:MedicalRecord[] = [
    {"visit_date":this.testDate.getDate(),
    "status":"triage",
    "employeeid":787584,
    "vitals_id":984594,
    "diagnosis_id":9458945,
    "visit_reason":"NOT FEELING WELL",
    "symptoms":"HEADACHE, UPSET STOMACH",
    "visit_summary":"Notes from Nurse",
    "visit_created_by":"Nurse Name",
    "visit_id":985,
    "temperature":96.2,
    "pulse":27,
    "systolic":30,
    "diastolic":22,
    "blood_oxygen":96,
    "vitals_created_by":"NURSE NAME",
    "date_created":this.testDate,
    "icd10_code":"ICD-10 CODE",
    "diagnosis_created_by":"Doctor Name",
    "diagnosis_date_created":this.testDate.getTime()
  }, 
  
  {"visit_date":this.testDate.getDate(),
  "status":"Assigned to Nurse",
  "employeeid":787584,
  "vitals_id":984594,
  "diagnosis_id":9458945,
  "visit_reason":"NOT FEELING WELL",
  "symptoms":"HEADACHE, UPSET STOMACH",
  "visit_summary":"Notes from Nurse",
  "visit_created_by":"Nurse Name",
  "visit_id":985,
  "temperature":96.2,
  "pulse":27,
  "systolic":30,
  "diastolic":22,
  "blood_oxygen":96,
  "vitals_created_by":"NURSE NAME",
  "date_created":this.testDate,
  "icd10_code":"ICD-10 CODE",
  "diagnosis_created_by":"Doctor Name",
  "diagnosis_date_created":this.testDate.getTime()
}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handlePageEvent(event: PageEvent) {
    this.currPage = event.pageIndex-1;
    console.log(event.length);
    console.log(event.pageSize);
  }

}
