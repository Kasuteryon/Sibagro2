import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ExternalLoginComponent } from './external-login/external-login.component';
import { InternalLoginComponent } from './internal-login/internal-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'auth', // Si esta vacío el contexto siempre sera products
    component: AuthComponent,
    children: [
      {path:'', pathMatch:'full', redirectTo:'login'},
      {path:'login', component:ExternalLoginComponent},
      {path:'access', component: InternalLoginComponent},
      {path:'register', component:RegisterComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
