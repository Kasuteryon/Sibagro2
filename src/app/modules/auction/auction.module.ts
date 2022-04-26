import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishComponent } from './publish/publish.component';
import { BiddingComponent } from './bidding/bidding.component';
import { AuctionComponent } from './auction.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PublishComponent,
    BiddingComponent,
    AuctionComponent
    ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ]
})
export class AuctionModule { }
