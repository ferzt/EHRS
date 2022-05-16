//This file defines the functionality of the Doctor Diagnosis Page, including submitting the diagnosis 
//and acts as a hub for submitting vendor orders
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-diagnosis',
  templateUrl: './doctor-diagnosis.component.html',
  styleUrls: ['./doctor-diagnosis.component.css']
})
export class DoctorDiagnosisComponent implements OnInit {
  public userForm:FormGroup;
  remarks: string='';
  doctorID = "a7afd98d-3e07-44cd-a014-8fa0ed34c9ee"
  oldStatus = "waiting for doctor"
  newStatus = "Waiting For Checkout"
  constructor(private router: Router, private service: ConsultationServiceService, private fb: FormBuilder) { 
    this.userForm = this.fb.group({remarks:''});
  }

  diagnosisList: any;
  ngOnInit(){
    this.getDataFromApi();
  }
  
  getDataFromApi()
  {
    this.service.getDiagnosisList().subscribe(data =>{
      this.diagnosisList = data;
    });
  }
  onSubmitPrescription() {
    this.router.navigate(['/home/order-prescription']);
  }

  onSubmitRadiology() {
    this.router.navigate(['/home/order-radiology']);
  }

  onSubmitLabTest() {
    this.router.navigate(['/home/order-lab-test']);
  }

  onSubmitDiagnosis() {
    this.remarks = this.userForm.get('remarks')?.value;
    const visitData = {visit_summary: this.remarks, newStatus: this.newStatus, doctor_id: this.doctorID, status: this.oldStatus}
    this.service.updateVisitSummary(visitData).subscribe(data => {
      console.log("Patient sent to Checkout")
    })
    this.router.navigate(['/home']);
  }
}
