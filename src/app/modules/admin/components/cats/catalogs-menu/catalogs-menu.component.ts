import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogs-menu',
  templateUrl: './catalogs-menu.component.html',
  styleUrls: ['./catalogs-menu.component.css']
})
export class CatalogsMenuComponent implements OnInit {

  mybreakpoint!: number;

  role:any = localStorage.getItem("role")?.toString();
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.role);
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : (window.innerWidth <= 1000) ? 3 : 4;
  }

  handleSize(event: any) {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : (window.innerWidth <= 1000) ? 3 : 4;
  }

}
