import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { VisitationQueueService } from '../visitation-queue.service';
import { Entry } from '../_visitmodels/entry';

@Component({
  selector: 'app-viewable-visitationcheckout',
  templateUrl: './viewable-visitationcheckout.component.html',
  styleUrls: ['./viewable-visitationcheckout.component.css']
})
export class ViewableVisitationcheckoutComponent implements OnInit {

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
    this.router.navigate(['/home/checkout'], { queryParams: { id: row.patientid } });
    // need code for user checkup
  }

  private loadQueue(){
    this.visitationQueueService.queuePayment().pipe(first()).subscribe(data => this.dataSource = new MatTableDataSource(data));
  }
}




