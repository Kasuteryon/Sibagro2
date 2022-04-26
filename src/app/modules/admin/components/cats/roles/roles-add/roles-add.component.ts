import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Roles } from 'src/app/modules/admin/models/roles';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-roles-add',
  templateUrl: './roles-add.component.html',
  styleUrls: ['./roles-add.component.css']
})
export class RolesAddComponent implements OnInit {
  

  form: FormGroup = new FormGroup({
    Role_Id: new FormControl(''),
    Role_Name: new FormControl(''),
    Role_Description: new FormControl(''),
    IsActive: new FormControl(true),
  }); 
  
  constructor(private service:CatalogService,
              private router:Router,
              private snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }

  submit(){
    if (this.form.valid){
      this.service.addRole(this.form.value).subscribe(result => {
        console.log(result);
        this.router.navigate(['admin', 'roles']);
        this.snack.open('Rol añadido', 'Cerrar', {
          duration: 3000
        });
      });
    }

 
  }

}
