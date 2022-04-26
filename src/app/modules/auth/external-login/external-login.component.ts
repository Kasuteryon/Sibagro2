import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.css']
})
export class ExternalLoginComponent implements OnInit {

  validFlag:boolean = true;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password : new FormControl('')
  }); 
  
  constructor() { }

  ngOnInit(): void {
  }


  public submit(){

  }

}
