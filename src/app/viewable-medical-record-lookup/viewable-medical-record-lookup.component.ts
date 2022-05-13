import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewable-medical-record-lookup',
  templateUrl: './viewable-medical-record-lookup.component.html',
  styleUrls: ['./viewable-medical-record-lookup.component.css']
})
export class ViewableMedicalRecordLookupComponent implements OnInit {

  hide = true;
  id;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    // Process checkout data here
    //alert(this.checkoutForm.get("username").value);
    //this.checkoutForm.reset();
    this.router.navigate(["/home/medrec-result", {id: 2984}]);
  }

}
