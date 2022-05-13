import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewable-medical-record',
  templateUrl: './viewable-medical-record.component.html',
  styleUrls: ['./viewable-medical-record.component.css']
})
export class ViewableMedicalRecordComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  changeRecordDisplay(url) {
    console.log(url);
    this.route.navigate(["./medrec-demographics"]);
  }

}
