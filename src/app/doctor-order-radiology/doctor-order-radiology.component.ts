//This component describes the radiology order functionality
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-doctor-order-radiology',
  templateUrl: './doctor-order-radiology.component.html',
  styleUrls: ['./doctor-order-radiology.component.css']
})
export class DoctorOrderRadiologyComponent implements OnInit {
  public userForm:FormGroup;
  order_name: string='';
  constructor(private router: Router, private service: ConsultationServiceService, private fb: FormBuilder) { 
    this.userForm = this.fb.group({order_name:''});
  }

  
  ngOnInit(): void {
    this.getDataFromAPI()
  }

  

  myId = uuid.v4();

  doctorID = "a7afd98d-3e07-44cd-a014-8fa0ed34c9ee"
  patientID = '713ebf64-3aa2-4fcc-8987-4b24e832a894'
  getDataFromAPI(){
    //could not get data to give me useable output, so left it hard coded, serves as a proof of concept at least
    this.service.getDoctorID().subscribe(data => {
      //this.doctorID = data;
      console.log(data)
    })
  }
  
  onSubmitRadiology() {
    //test data
    this.order_name = this.userForm.get('order_name')?.value;
    const orderData = {order_id: this.myId, employeeid: this.doctorID, patientid: this.patientID, order_type: 'radiology', order_name: this.order_name}
    this.service.addOrder(orderData).subscribe(data => {
      console.log("Order Submitted")
    })
    this.router.navigate(['/home/diagnosis']);
  }
}

