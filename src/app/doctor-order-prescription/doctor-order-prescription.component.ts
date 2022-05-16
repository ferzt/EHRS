//This file describes the order prescription component
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';
import * as uuid from 'uuid';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-order-prescription',
  templateUrl: './doctor-order-prescription.component.html',
  styleUrls: ['./doctor-order-prescription.component.css']
})
export class DoctorOrderPrescriptionComponent implements OnInit {
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
    this.service.getDoctorID().subscribe(data => {
      //this.doctorID = data;
      console.log(data)
    })
  }
  onSubmitPrescription() {
    this.order_name = this.userForm.get('order_name')?.value;
    const orderData = {order_id: this.myId, employeeid: this.doctorID, patientid: this.patientID, order_type: 'medication', order_name: this.order_name}
    this.service.addOrder(orderData).subscribe(data => {
      console.log("Order Submitted")
    })
    this.router.navigate(['/home/diagnosis']);
  }
}
