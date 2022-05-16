import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Entry } from 'src/app/_visitmodels/entry';
import { VisitationQueueService } from '../visitation-queue.service';

/** Constants used to fill up our data base. */
interface Status {
  value: string;
  name: string;
};

@Component({
  selector: 'app-viewable-visitationqueue',
  templateUrl: './viewable-visitationqueue.component.html',
  styleUrls: ['./viewable-visitationqueue.component.css']
})
export class ViewableVisitationqueueComponent implements OnInit{
  // options for drop down box
  statuses: Status[] = [
    {value: '1', name: 'All'},
    {value: '2', name: 'Waiting for Triage'},
    {value: '3', name: 'Waiting for Doctor'},
    {value: '4', name: 'Waiting for Payment'},
    {value: '5', name: 'Ready for Checkout'}
  ];

  displayedColumns: string[] = ['patientName', 'visitDate', 'nurse', 'doctor', 'status'];
  dataSource: MatTableDataSource<Entry> ;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private visitationQueueService: VisitationQueueService, private router: Router) {}

  ngOnInit(): void {
    this.loadQueue(); // load the queue upon initialization
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewRecord(row) {// view Record upon a click
    console.log('Clicked');
    this.router.navigate(['/home/visitation-record'], { queryParams: { id: row.patientid } });
    // need code for user checkup
  }

  onSelectChanged(event) {
    console.log(event);
    switch (event.value){
      case '1':
        this.loadQueue();
        break;
      case '2':
        this.visitationQueueService.queueTriage()
        .pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
        break;
      case '3':
        this.visitationQueueService.queueDoctor()
        .pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
        break;
      case '4':
        this.visitationQueueService.queuePayment()
      // tslint:disable-next-line:align
        .pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
        break;
      case '4':
        this.visitationQueueService.queueCheckout()
        .pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
        break;
    }
  }

  private loadQueue(){
    this.visitationQueueService.getQueue().pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}
