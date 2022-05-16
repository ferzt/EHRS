import { Component, OnInit } from '@angular/core';
import {FetchInfoService} from '../fetch-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Medications} from '../medications';

@Component({
  selector: 'app-viewable-medicalrecords-medications',
  templateUrl: './viewable-medicalrecords-medications.component.html',
  styleUrls: ['./viewable-medicalrecords-medications.component.css']
})
export class ViewableMedicalrecordsMedicationsComponent implements OnInit {

  patientMedications;

  numPages;
  pageTracker:number = 0;
  showResults:boolean = true;

  constructor(public fetchUserMedicalRecord:FetchInfoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.id = parseInt(params.get('id'));
      this.fetchUserMedicalRecord.getMedications(params.get('id')).subscribe(res => {
        this.patientMedications = res as Medications[];
        this.numPages = this.patientMedications.length;
        if(this.patientMedications.length > 0){
          this.showResults = true;
        } else {
          this.showResults = false;
        }
        console.log(this.patientMedications)
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
