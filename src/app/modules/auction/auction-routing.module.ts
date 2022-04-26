import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction.component';
import { BiddingComponent } from './bidding/bidding.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  {
    path: '',
    component: AuctionComponent,
    children: [
      { path: 'publish', component: PublishComponent },
      { path: 'bidding', component: BiddingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
