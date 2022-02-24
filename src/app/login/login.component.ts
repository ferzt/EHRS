import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    alert(this.checkoutForm.get("username").value);
    this.checkoutForm.reset();
  }

}
