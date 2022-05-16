import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-landing',
  templateUrl: './nurse-landing.component.html',
  styleUrls: ['./nurse-landing.component.css']
})
export class NurseLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    alert("You are assigned to a patient!");
    
  }


  onReceivePatient() {
    this.router.navigate(['/home/NurseOverview']);
  }

}
