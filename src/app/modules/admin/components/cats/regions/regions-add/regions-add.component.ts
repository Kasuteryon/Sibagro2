import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-regions-add',
  templateUrl: './regions-add.component.html',
  styleUrls: ['./regions-add.component.css']
})
export class RegionsAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    Region_Code: new FormControl(''),
    Region_Name: new FormControl('')
  });
  constructor(private service:CatalogService, 
              private router:Router,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid){
      this.service.addRegion(this.form.value).subscribe(result => {
        console.log(result);
        this.router.navigate(['admin', 'regions']);
        this.snack.open('Región añadido', 'Cerrar', {
          duration: 3000
        });
      });
    }
  }
}
