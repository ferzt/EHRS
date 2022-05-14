import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Entry } from 'src/app/_visitmodels/entry';
import { VisitationQueueService } from '../visitation-queue.service';

/** Constants used to fill up our data base. */
const Statuses: string[] = [
  'Waiting for Triage',
  'Waiting for Doctor',
  'Waiting for Checkout',
];
const PatientNames: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Thomas',
  'Elizabeth',
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
  selector: 'app-viewable-visitationqueue',
  templateUrl: './viewable-visitationqueue.component.html',
  styleUrls: ['./viewable-visitationqueue.component.css']
})
export class ViewableVisitationqueueComponent implements OnInit{

  displayedColumns: string[] = ['patientName', 'visitDate', 'nurse', 'doctor', 'status'];
  dataSource: MatTableDataSource<Entry> ;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private visitationQueueService: VisitationQueueService, private router: Router) {
    // const users = Array.from({length: 25}, (_, k) => createNewUser(k + 1));
    // this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    this.loadQueue();
  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewRecord(row) {
    console.log("CLICKED")
    this.router.navigate(['/home/visitation-record'], { queryParams: { id: row.patientid } });
  }

  private loadQueue(){
    this.visitationQueueService.getQueue().pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}

//   /** Builds and returns a new User. */
// function createNewUser(id: number): Entry {
//   const name =
//   PatientNames[Math.round(Math.random() * (PatientNames.length - 1))] +
//     ' ' +
//     PatientNames[Math.round(Math.random() * (PatientNames.length - 1))].charAt(0) +
//     '.';

//   var testDate = new Date(2022, 4, 25);
//   var testDate2 = new Date();
//   var date = new Date(testDate.getTime() + Math.random() * (testDate2.getTime() - testDate.getTime()));
//   var formatdate = date.getFullYear()  +'/' + (date.getMonth()) + '/'+date.getDate() + ' - ' + date.getHours() + ":" + date.getMinutes();

//   return {
//     visit_id: id,
//     patientId: id.toString(),
//     patientName: name,
//     visitDate: formatdate,
//     nurse: Nurses[Math.round(Math.random() * (Nurses.length - 1))],
//     doctor: Doctors[Math.round(Math.random() * (Doctors.length - 1))],
//     status: Statuses[Math.round(Math.random() * (Statuses.length - 1))],
//   };

// }
