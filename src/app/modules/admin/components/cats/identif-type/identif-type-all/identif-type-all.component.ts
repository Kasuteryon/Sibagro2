import { Component, OnInit } from '@angular/core';
import { IdentifyType } from 'src/app/modules/admin/models/identify-type';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-identif-type-all',
  templateUrl: './identif-type-all.component.html',
  styleUrls: ['./identif-type-all.component.css']
})
export class IdentifTypeAllComponent implements OnInit {

  idenTypes!: IdentifyType[];

  constructor(private service:CatalogService) { }

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes(){
    this.service.getIdentifyTypes().subscribe((data:any) => {
      console.log(data["body"]);

      this.idenTypes = data["body"];
    });
  }
}
