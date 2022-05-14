import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
  patientId: string;
  patientName: string;
  visitDate: string;
  nurse: string;
  doctor: string;
  status: string;
}

/** Constants used to fill up our data base. */
const Statuses: string[] = [
  'Waiting for Checkout',
];
const PatientNames: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
];

const Nurses: string[] = [
  'Jackie',
  'Frank',
]

const Doctors: string[] = [
  'Bob',
  'Austin',
]

@Component({
  selector: 'app-viewable-visitationcheckout',
  templateUrl: './viewable-visitationcheckout.component.html',
  styleUrls: ['./viewable-visitationcheckout.component.css']
})
export class ViewableVisitationcheckoutComponent implements OnInit {

  displayedColumns: string[] = ['patientName', 'visitDate', 'nurse', 'doctor', 'status'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) { 
    // Create 100 users
    const users = Array.from({length: 7}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewRecord(row) {
    console.log("CLICKED")
    this.router.navigate(['/home/checkout'], { queryParams: { id: row.patientId } });
  }
}

  /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
  PatientNames[Math.round(Math.random() * (PatientNames.length - 1))] +
    ' ' +
    PatientNames[Math.round(Math.random() * (PatientNames.length - 1))].charAt(0) +
    '.';

  var testDate = new Date(2022, 4, 25);
  var testDate2 = new Date();
  var date = new Date(testDate.getTime() + Math.random() * (testDate2.getTime() - testDate.getTime()));
  var formatdate = date.getFullYear()  +'/' + (date.getMonth()) + '/'+date.getDate() + ' - ' + date.getHours() + ":" + date.getMinutes();

  return {
    patientId: id.toString(),
    patientName: name,
    visitDate: formatdate,
    nurse: Nurses[Math.round(Math.random() * (Nurses.length - 1))],
    doctor: Doctors[Math.round(Math.random() * (Doctors.length - 1))],
    status: Statuses[Math.round(Math.random() * (Statuses.length - 1))],
  };

}




