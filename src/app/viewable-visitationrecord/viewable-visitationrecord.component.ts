import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { first, map, startWith} from 'rxjs/operators';
import { VisitationRecord } from '../visitation-record';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitService } from '../visit.service';
import { Patient } from '../_visitmodels/patient';
import { Visit } from '../_visitmodels/visit';

@Component({
  selector: 'app-viewable-visitationrecord',
  templateUrl: './viewable-visitationrecord.component.html',
  styleUrls: ['./viewable-visitationrecord.component.css']
})
export class ViewableVisitationrecordComponent implements OnInit {

  myControl = new FormControl();
  patients: Patient[];
  patientid = ''; // value for setting patientID
  filteredPatients: Observable<Patient[]>;
  filteredNames: Observable<string[]>;
  statuses: string[] = ['Waiting for Triage', 'Waiting for Doctor', 'Waiting for Payment'];

  formModel = new VisitationRecord(0, '', new Date(), '', 0, 0, 0, 0, '', '', '', 0);

  constructor(
    private route: ActivatedRoute, private visitService: VisitService, private router: Router) { }

  ngOnInit() {
    this.patients = this.route.snapshot.data.patients;
    this.filteredPatients = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.namebirth)),
      map(namebirth => (namebirth ? this._filter(namebirth) : this.patients.slice())),
    );
  }


  private _filter(value: string): Patient[] {
    const filterValue = value.toLowerCase();
    return this.patients.filter(patient => patient.namebirth.toLowerCase().includes(filterValue));
  }

  displayFn(patient: Patient): string{
    return patient && patient.namebirth ? patient.namebirth : '';
  }

  onPatientSelectionChanged(event){
    console.log(event.option.id);
    this.patientid = event.option.id;
    console.log(this.patientid);
  }

  onSubmit() {
    this.formModel.patientID = this.patientid;
    console.log(this.formModel);
    console.log(typeof this.formModel.visitDate);
    const visit: Visit = {
      patientid: this.formModel.patientID,
      status: 'Waiting for triage',
      visit_reason: this.formModel.visitReason
    };
    console.log(visit);
    this.visitService.addVisit(visit).pipe(first()).subscribe(data => {
      this.router.navigate(['/home/visitation-queue']);
      console.log(data);
    }, error => {
      alert('Error: Could not submit');
    });
  }

}
