import { Component, OnInit } from '@angular/core';
import { Identify } from 'src/app/modules/admin/models/identify';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-identif-all',
  templateUrl: './identif-all.component.html',
  styleUrls: ['./identif-all.component.css']
})
export class IdentifAllComponent implements OnInit {

  identify!: Identify[];

  constructor(private service:CatalogService) { }

  ngOnInit(): void {
    this.loadIdentify();
  }

  loadIdentify(){
    this.service.getIdentify().subscribe((data:any) => {
      console.log(data["body"]);

      this.identify = data["body"];
    });
  }
  

}
