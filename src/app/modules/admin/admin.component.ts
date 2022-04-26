import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  role:any = localStorage.getItem("role")?.toString();
  ngOnInit(): void {
    if (localStorage.getItem("logged") === null || localStorage.getItem("token") === null ||
    localStorage.getItem("role") === null || localStorage.getItem("role") !== "S-ADM"){
      this.router.navigate(["auth/access"]);
    }

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router:Router) { }

}
