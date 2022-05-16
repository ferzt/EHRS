import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Demographics } from '../demographics';
import { FetchInfoService } from '../fetch-info.service';

export interface Directory {
  lastname: string;
  firstname: string;
  patientid: number;
  visit_date: Date;
}



// const ELEMENT_DATA: Directory[] = [
//   {last_name: "1", first_name: 'Hydrogen', id: 10079, visit_date: new Date()},
//   {last_name: "2", first_name: 'Helium', id: 40026, visit_date: new Date()},
//   {last_name: "3", first_name: 'Lithium', id: 6941, visit_date: new Date()},
//   {last_name: "4", first_name: 'Beryllium', id: 90122, visit_date: new Date()},
//   {last_name: "5", first_name: 'Boron', id: 10811, visit_date: new Date()},
//   {last_name: "6", first_name: 'Carbon', id: 120107, visit_date: new Date()},
//   {last_name: "7", first_name: 'Nitrogen', id: 140067, visit_date: new Date()},
//   {last_name: "8", first_name: 'Oxygen', id: 159994, visit_date: new Date()},
//   {last_name: "9", first_name: 'Fluorine', id: 189984, visit_date: new Date()},
//   {last_name: "10", first_name: 'Neon', id: 201797, visit_date: new Date()},
// ];


@Component({
  selector: 'app-viewable-medrec-search-result',
  templateUrl: './viewable-medrec-search-result.component.html',
  styleUrls: ['./viewable-medrec-search-result.component.css']
})

export class ViewableMedrecSearchResultComponent implements OnInit {

  id;

  ELEMENT_DATA: Directory[];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:ActivatedRoute, private router:Router, private fetchInfo: FetchInfoService) { }

  ngAfterViewInit() {
    
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    }); 
    this.fetchInfo.getAllPatients().subscribe(res => {
      this.ELEMENT_DATA= res as Directory[];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.ELEMENT_DATA);
    })
  }


  displayedColumns: string[] = ['last_name', 'first_name', 'id', 'visit_date'];
  
  clickedRows = new Set<Directory>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigate(row){
    console.log(row.id);
    this.router.navigate(["/home/medical-records",{id: row.patientid}]);
  }


}
