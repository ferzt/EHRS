import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { VisitationRecord } from '../visitation-record';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewable-visitationrecord',
  templateUrl: './viewable-visitationrecord.component.html',
  styleUrls: ['./viewable-visitationrecord.component.css']
})
export class ViewableVisitationrecordComponent implements OnInit {

  myControl = new FormControl();
  names: string[] = ['Medge Edwards', 'Kirk Acosta', 'Demetria Copeland','Reagan Mueller', 'Justine Page'];
  filteredNames: Observable<string[]>;

  formModel = new VisitationRecord(0, '', new Date, '', 0, 0, 0, 0, '', '', '', 0);

  constructor( private router: Router) { }

  ngOnInit() {
    this.filteredNames = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.names.filter(name => name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log(this.formModel);
    this.router.navigate(['/home/visitation-queue']);
  }

}
