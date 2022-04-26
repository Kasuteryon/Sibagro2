import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/modules/admin/models/roles';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-roles-all',
  templateUrl: './roles-all.component.html',
  styleUrls: ['./roles-all.component.css']
})
export class RolesAllComponent implements OnInit {
  roles!: Roles[];
  
  constructor(private service:CatalogService) { }

  ngOnInit(): void {
    this.loadRoles();
    // console.log(this.roles);
  }

  public loadRoles(){
    this.service.getRoles().subscribe((data:any) => {
      
      console.log(data["body"]);

      this.roles = data["body"];
    });
  }

  
}
