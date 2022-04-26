import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [CategoryCardsComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports:[
    CategoryCardsComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
