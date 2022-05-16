import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-overwiew',
  templateUrl: './doctor-overwiew.component.html',
  styleUrls: ['./doctor-overwiew.component.css']
})
export class DoctorOverwiewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDoctorAddDiagnosis(){
    this.router.navigate(['/home/diagnosis']);
  }
  onDoctorViewVisit(){
    this.router.navigate(['/home/diagnosis']);
  }
  onDoctorViewMedical(){
    this.router.navigate(['/home/diagnosis']);
  }
  onCheckoutBtn(){
    this.router.navigate(['/home/diagnosis']);
  }

}
