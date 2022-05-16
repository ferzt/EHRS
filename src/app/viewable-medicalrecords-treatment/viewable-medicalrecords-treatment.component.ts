import { Component, OnInit } from '@angular/core';
import {FetchInfoService} from '../fetch-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Procedure} from '../procedure';

@Component({
  selector: 'app-viewable-medicalrecords-treatment',
  templateUrl: './viewable-medicalrecords-treatment.component.html',
  styleUrls: ['./viewable-medicalrecords-treatment.component.css']
})
export class ViewableMedicalrecordsTreatmentComponent implements OnInit {

  patientProcedure;

  numPages;
  pageTracker:number = 0;
  showResults:boolean = false;

  constructor(public fetchUserMedicalRecord:FetchInfoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.id = parseInt(params.get('id'));
      this.fetchUserMedicalRecord.getProcedure(params.get('id')).subscribe(res => {
        this.patientProcedure= res as Procedure[];
        this.numPages = this.patientProcedure.length;
        if(this.numPages > 0){
          this.showResults = true;
        } else {
          this.showResults = false;
        }
        console.log(this.showResults)
        console.log(this.patientProcedure)
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
