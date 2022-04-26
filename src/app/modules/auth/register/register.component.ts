import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  selection: FormGroup = new FormGroup({
    picked: new FormControl('')
  });
  ngOnInit(): void {

  }

  selected() {
    if (this.selection.value.picked) {
      console.log(this.selection.value.picked);
      return this.selection.value.picked;
    }
  }

}
