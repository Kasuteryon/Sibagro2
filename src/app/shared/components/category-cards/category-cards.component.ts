import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("logged") === null || localStorage.getItem("token") === null ||
    localStorage.getItem("role") === null){
      this.router.navigate(["access"]);
    }
  }

}
