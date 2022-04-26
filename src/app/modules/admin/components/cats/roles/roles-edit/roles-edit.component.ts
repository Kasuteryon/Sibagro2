import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css']
})
export class RolesEditComponent implements OnInit {

  id!:any;
  form: FormGroup = new FormGroup({
    role_Id: new FormControl(''),
    role_Name: new FormControl(''),
    role_Description: new FormControl(''),
    isActive: new FormControl(''),
  }); 
  
  constructor(private route:ActivatedRoute,
              private service:CatalogService) { }

  ngOnInit(): void {
    // console.log();
    // this.id = this.route.snapshot.paramMap.get('id');

    this.service.getOneRole(this.route.snapshot.paramMap.get('id')!.toString()).subscribe((role:any) =>{
        this.form.patchValue(role["body"]);
        console.log(role["body"]);
        console.log(this.form.value);
      }

    );
  }

  submit(){
    if (this.form.value){

    }
  }

}
