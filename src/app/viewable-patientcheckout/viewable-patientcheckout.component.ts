import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';

export interface Patient {
  name: string;
  visitDate: string;
  visitReason: string;
}

export interface UserData {
  patientTreatment: string;
  quantity: number;
  cost: number;
} 

/** Constants used to fill up our data base. */
const Treatments: string[] = [
  'Pyizer COVID Vaccine',
  'Tylenol',
  'O2 Treatment',
  'IV Fluids',
  'Anit-Inflammatory Medicine',
  'Antiseptic Cream',
];
const Quantities: number[] = [
  1,2,3,
];

const Costs: number[] = [
  10, 15, 25, 40, 50, 75, 100,
]

@Component({
  selector: 'app-viewable-patientcheckout',
  templateUrl: './viewable-patientcheckout.component.html',
  styleUrls: ['./viewable-patientcheckout.component.css']
})
export class ViewablePatientcheckoutComponent implements OnInit {

  testDate = new Date(2022, 4, 25);
  testDate2 = new Date();
  date = new Date(this.testDate.getTime() + Math.random() * (this.testDate2.getTime() - this.testDate.getTime()));
  formatdate = this.date.getFullYear()  +'/' + (this.date.getMonth()) + '/'+ this.date.getDate() + ' - ' + this.date.getHours() + ":" + this.date.getMinutes();

  folders: Patient[] = [
  {
    name: 'Thomas Gomez',
    visitDate: this.formatdate,
    visitReason: 'Headache with slight sore throat.  Recently had issues with coughing and had major pain in chest area.',
  }];

  displayedColumns: string[] = ['patientTreatment', 'quantity', 'cost'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) { 
    // Create 100 users
    const treatment = Array.from({length: 5}, (_, k) => createTreatment(k + 1));
    this.dataSource = new MatTableDataSource(treatment);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getTotalCost() {
    return this.dataSource.data.map(t => t.cost * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  onSubmit() {
    this.router.navigate(['/home/checkout-patient']);
  }

}

  /** Builds and returns a new User. */
  function createTreatment(id: number): UserData {  
    return {
      patientTreatment: Treatments[Math.round(Math.random() * (Treatments.length - 1))],
      quantity: Quantities[Math.round(Math.random() * (Quantities.length - 1))],
      cost: Costs[Math.round(Math.random() * (Costs.length - 1))],
    };
  
  }
