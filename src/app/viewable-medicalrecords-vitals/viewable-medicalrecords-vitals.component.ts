import { Component, OnInit } from '@angular/core';
import {FetchInfoService} from '../fetch-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Vitals} from '../vitals';

@Component({
  selector: 'app-viewable-medicalrecords-vitals',
  templateUrl: './viewable-medicalrecords-vitals.component.html',
  styleUrls: ['./viewable-medicalrecords-vitals.component.css']
})
export class ViewableMedicalrecordsVitalsComponent implements OnInit {

  numPages;
  pageTracker:number = 0;

  patientVitals:Vitals[];

  constructor(private route:ActivatedRoute, private fetchInfo:FetchInfoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.id = parseInt(params.get('id'));
      this.fetchInfo.getVitals(params.get('id')).subscribe(res => {
        this.patientVitals = res as Vitals[];
        this.numPages = this.patientVitals.length;
        console.log(this.patientVitals)
      })
    }); 
  }

  handlePageEvent(event){
    if(event.previousPageIndex < event.pageIndex){
      this.pageTracker += 1;
    } else {
      this.pageTracker -= 1;
    }
    console.log(event);
  }

}
