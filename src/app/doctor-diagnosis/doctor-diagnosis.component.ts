import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';

@Component({
  selector: 'app-doctor-diagnosis',
  templateUrl: './doctor-diagnosis.component.html',
  styleUrls: ['./doctor-diagnosis.component.css']
})
export class DoctorDiagnosisComponent implements OnInit {

  constructor(private router: Router, private service: ConsultationServiceService) { }

  diagnosisList: any;
  ngOnInit(){
    this.getDataFromApi();
  }
  
  getDataFromApi()
  {
    this.service.getDiagnosisList().subscribe(data =>{
      console.log(data);this.diagnosisList = data;
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
    this.router.navigate(['/home']);
  }
}
