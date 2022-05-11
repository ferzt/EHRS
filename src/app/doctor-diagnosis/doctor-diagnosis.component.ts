import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-diagnosis',
  templateUrl: './doctor-diagnosis.component.html',
  styleUrls: ['./doctor-diagnosis.component.css']
})
export class DoctorDiagnosisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
