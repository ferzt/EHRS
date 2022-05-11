import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-order-labtest',
  templateUrl: './doctor-order-labtest.component.html',
  styleUrls: ['./doctor-order-labtest.component.css']
})
export class DoctorOrderLabtestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLabTest() {
    this.router.navigate(['/home/diagnosis']);
  }

}
