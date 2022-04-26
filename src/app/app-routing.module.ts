import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardsComponent } from './shared/components/category-cards/category-cards.component';
import { LandingComponent } from './shared/components/landing/landing.component';
const routes: Routes = [
  {
    path:'auth',
    // Esta funcion import devuelve una promesa y se tiene que resolver por eso usamos 'then'
    // por lo tanto tambien cargamos dinamicamente el modulo de productos con el lazy loading
    //loadChildren: () => import('./auth/auth.module.ts').then(m  => m.AuthModule)
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./modules/client/client.module').then(m=>m.ClientModule)
  },
  {
    path: 'auction',
    loadChildren: () => import('./modules/auction/auction.module').then(m=>m.AuctionModule)
  },
  {
    path:'categories',
    component: CategoryCardsComponent
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {path:'', pathMatch:'full', redirectTo:'landing'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
