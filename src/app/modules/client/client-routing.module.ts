import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { InfoclientComponent } from './components/infoclient/infoclient.component';
import { InitclientComponent } from './components/initclient/initclient.component';
import { PaymentsclientComponent } from './components/paymentsclient/paymentsclient.component';
import { SecuclientComponent } from './components/secuclient/secuclient.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {path:'init', component:InitclientComponent},
      {path:'info', component:InfoclientComponent},
      {path:'sec', component:SecuclientComponent},
      {path:'pay', component:PaymentsclientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
