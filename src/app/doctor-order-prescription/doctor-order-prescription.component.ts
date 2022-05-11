import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-order-prescription',
  templateUrl: './doctor-order-prescription.component.html',
  styleUrls: ['./doctor-order-prescription.component.css']
})
export class DoctorOrderPrescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitPrescription() {
    this.router.navigate(['/home/diagnosis']);
  }
}
