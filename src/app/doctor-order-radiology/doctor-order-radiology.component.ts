import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-order-radiology',
  templateUrl: './doctor-order-radiology.component.html',
  styleUrls: ['./doctor-order-radiology.component.css']
})
export class DoctorOrderRadiologyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitRadiology() {
    this.router.navigate(['/home/diagnosis']);
  }

}
