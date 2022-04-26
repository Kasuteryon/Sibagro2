import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/app/modules/admin/models/region';
import { CatalogService } from 'src/app/modules/admin/services/catalog.service';

@Component({
  selector: 'app-regions-all',
  templateUrl: './regions-all.component.html',
  styleUrls: ['./regions-all.component.css']
})
export class RegionsAllComponent implements OnInit {

  regions!: Regions[];

  constructor(private service:CatalogService) { }

  ngOnInit(): void {
    this.loadRegions();
  }

  loadRegions(){
    this.service.getRegions().subscribe((data:any) => {
      console.log(data["body"]["items"]);

      this.regions = data["body"]["items"];
    });
  }

}
