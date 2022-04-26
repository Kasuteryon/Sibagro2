import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-identif-type-add',
  templateUrl: './identif-type-add.component.html',
  styleUrls: ['./identif-type-add.component.css']
})
export class IdentifTypeAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    identification_Type: new FormControl(''),
    identification_Type_description:new FormControl(''),
  });

  constructor(private service:CatalogService,
              private router:Router,
              private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid){
      this.service.addIdentifyType(this.form.value).subscribe(result => {
        console.log(result);

        this.router.navigate(['admin', 'identif-types']);
        this.snack.open('Tipo de Identificación añadido', 'Cerrar', {
          duration: 3000
        });

      });
    }
  }

}
