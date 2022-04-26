import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IdentifyType } from 'src/app/modules/admin/models/identify-type';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-identif-add',
  templateUrl: './identif-add.component.html',
  styleUrls: ['./identif-add.component.css']
})
export class IdentifAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    identification_Catalogid: new FormControl(''),
    identificationtype_catalogid: new FormControl(''),
    identification_Name: new FormControl(''),
    format_Identification:new FormControl(''), 
    format_Pattern:new FormControl(''), 
  });

  idenTypes!: IdentifyType[];

  constructor(private service:CatalogService,
              private router:Router,
              private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.loadTypes();
  }

  submit(){
    if (this.form.valid){
      this.service.addIdentify(this.form.value).subscribe(result => {
        console.log(result);

        this.router.navigate(['admin', 'identif']);
        this.snack.open('Identificación añadido', 'Cerrar', {
          duration: 3000
        });
      });
    }
  }

  public loadTypes(){
    this.service.getIdentifyTypes().subscribe((data:any) => {
      console.log(data["body"]);

      this.idenTypes = data["body"];
    });
  }
}
