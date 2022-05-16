import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationServiceService } from '../consultation-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-doctornurse-view-medical',
	templateUrl: './doctornurse-view-medical.component.html',
	styleUrls: ['./doctornurse-view-medical.component.css']
})
export class DoctorNurseViewMedicalComponent implements OnInit {
	medicalData:any;

	constructor(private router: Router, private service: ConsultationServiceService, private fb: FormBuilder) { 
		
	}

	ngOnInit(){
		this.getDataFromApi();
	}

	getDataFromApi() {
		//TODO replace with actual patient id
		this.service.getMedicalRecord("37f068aa-fc08-4499-a049-babe85fe96bf").subscribe(data =>{
			this.medicalData = data;
			this.populateTableWithData();
		});
	}

	populateTableWithData() {
		//TODO this
	}
}
