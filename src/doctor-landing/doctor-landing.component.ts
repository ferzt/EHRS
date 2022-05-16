import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-landing',
  templateUrl: './doctor-landing.component.html',
  styleUrls: ['./doctor-landing.component.css']
})
export class DoctorLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    alert("A patient is waiting for you!");
    
  }

  onReceivePatientDoctor() {
    this.router.navigate(['/home/DoctorOverview']);
  }

}
