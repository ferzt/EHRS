import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import {MedicalRecord} from '../medical-record';
import {Demographics} from '../demographics';
import {FetchInfoService} from '../fetch-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewable-medicalrecords-demographics',
  templateUrl: './viewable-medicalrecords-demographics.component.html',
  styleUrls: ['./viewable-medicalrecords-demographics.component.css']
})
export class ViewableMedicalrecordsDemographicsComponent implements OnInit {

  id;
  private testDate = new Date();

  public name:String = "Walter";
  public patientID:number = 1;
  public userMedicalRecord:MedicalRecord[];
  public testUserDemographics:Demographics;


  // public testUserDemographics:Demographics = {
  //   patientid:8959,
  //   first_name:"Thomas",
  //   middle_initial:"L.",
  //   last_name:"Reed",
  //   date_of_birth:formatDate(this.testDate,'yyyy-MM-dd', 'en-US'),
  //   home_phone:"240-894-9240",
  //   address_id:"kdsd",
  //   height:173,
  //   weight:250,
  //   nok_first_name:"next_of_kin first name",
  //   nok_last_name:"next_of_kin last name",
  //   nok_mobile_phone:"next_of_kin phone #",
  //   mobile_phone:"next_of_kin mobile",
  //   work_phone:"892-084-8944",
  //   insurance_id:"89549AD",
  //   creating_date:this.testDate,
  //   streetname1:"928 South Ln",
  //   streetname2:"Unit 23",
  //   zipcode:"90724",
  //   city:"NorthsBerry",
  //   state:"CT"
  // }

  constructor(public fetchUserMedicalRecord:FetchInfoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.id = parseInt(params.get('id'));
      this.fetchUserMedicalRecord.getPatient(params.get('id')).subscribe(res => {
        this.testUserDemographics = res as Demographics;
        console.log(this.testUserDemographics)
      })
    }); 
    
  }

}
