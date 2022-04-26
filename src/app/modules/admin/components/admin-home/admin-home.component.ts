import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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
