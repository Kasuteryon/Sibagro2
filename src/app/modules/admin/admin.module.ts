import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from "@angular/material/dialog"
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RolesAddComponent } from './components/cats/roles/roles-add/roles-add.component';
import { RolesAllComponent } from './components/cats/roles/roles-all/roles-all.component';
import { RolesEditComponent } from './components/cats/roles/roles-edit/roles-edit.component';
import { RegionsAllComponent } from './components/cats/regions/regions-all/regions-all.component';
import { RegionsAddComponent } from './components/cats/regions/regions-add/regions-add.component';
import { RegionsEditComponent } from './components/cats/regions/regions-edit/regions-edit.component';
import { CountriesAllComponent } from './components/cats/countries/countries-all/countries-all.component';
import { CountriesAddComponent } from './components/cats/countries/countries-add/countries-add.component';
import { CountriesEditComponent } from './components/cats/countries/countries-edit/countries-edit.component';
import { DivisionsAllComponent } from './components/cats/divisions/divisions-all/divisions-all.component';
import { DivisionsAddComponent } from './components/cats/divisions/divisions-add/divisions-add.component';
import { DivisionsEditComponent } from './components/cats/divisions/divisions-edit/divisions-edit.component';
import { AccountRequestMenuComponent } from './components/account-request/account-request-menu/account-request-menu.component';
import { AccountRequestAllComponent } from './components/account-request/account-request-all/account-request-all.component';
import { AccountRequestMgComponent } from './components/account-request/account-request-mg/account-request-mg.component';
import { AccountRequestDenyComponent } from './components/account-request/account-request-deny/account-request-deny.component';
import { AppointAllComponent } from './components/account-request/appoint/appoint-all/appoint-all.component';
import { AppointMgComponent } from './components/account-request/appoint/appoint-mg/appoint-mg.component';
import { AppointSetComponent } from './components/account-request/appoint/appoint-set/appoint-set.component';
import { AuctionRequestMenuComponent } from './components/auction-request/auction-request-menu/auction-request-menu.component';
import { AuctionRequestAllComponent } from './components/auction-request/auction-request-all/auction-request-all.component';
import { TradingRequestMenuComponent } from './components/trading-request/trading-request-menu/trading-request-menu.component';
import { TradingRequestAllComponent } from './components/trading-request/trading-request-all/trading-request-all.component';
import { CatalogsMenuComponent } from './components/cats/catalogs-menu/catalogs-menu.component';
import { UsersAllComponent } from './components/users/users-all/users-all.component';
import { UsersMgComponent } from './components/users/users-mg/users-mg.component';
import { CattleAllComponent } from './components/cats/products/cattle/cattle-all/cattle-all.component';
import { CattleAddComponent } from './components/cats/products/cattle/cattle-add/cattle-add.component';
import { CattleEditComponent } from './components/cats/products/cattle/cattle-edit/cattle-edit.component';
import { GrainsAllComponent } from './components/cats/products/grains/grains-all/grains-all.component';
import { GrainsAddComponent } from './components/cats/products/grains/grains-add/grains-add.component';
import { GrainsEditComponent } from './components/cats/products/grains/grains-edit/grains-edit.component';
import { MachinesAddComponent } from './components/cats/products/machines/machines-add/machines-add.component';
import { MachinesAllComponent } from './components/cats/products/machines/machines-all/machines-all.component';
import { MachinesEditComponent } from './components/cats/products/machines/machines-edit/machines-edit.component';
import { PhonesAllComponent } from './components/cats/phones/phones-all/phones-all.component';
import { PhonesAddComponent } from './components/cats/phones/phones-add/phones-add.component';
import { PhonesEditComponent } from './components/cats/phones/phones-edit/phones-edit.component';
import { StatesAllComponent } from './components/cats/states/states-all/states-all.component';
import { StatesAddComponent } from './components/cats/states/states-add/states-add.component';
import { StatesEditComponent } from './components/cats/states/states-edit/states-edit.component';
import { RequestTypeAllComponent } from './components/cats/request-type/request-type-all/request-type-all.component';
import { RequestTypeAddComponent } from './components/cats/request-type/request-type-add/request-type-add.component';
import { RequestTypeEditComponent } from './components/cats/request-type/request-type-edit/request-type-edit.component';
import { IdentifAllComponent } from './components/cats/identif/identif-all/identif-all.component';
import { IdentifAddComponent } from './components/cats/identif/identif-add/identif-add.component';
import { IdentifEditComponent } from './components/cats/identif/identif-edit/identif-edit.component';
import { IdentifTypeAllComponent } from './components/cats/identif-type/identif-type-all/identif-type-all.component';
import { IdentifTypeAddComponent } from './components/cats/identif-type/identif-type-add/identif-type-add.component';
import { IdentifTypeEditComponent } from './components/cats/identif-type/identif-type-edit/identif-type-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    RolesAddComponent,
    RolesAllComponent,
    RolesEditComponent,
    RegionsAllComponent,
    RegionsAddComponent,
    RegionsEditComponent,
    CountriesAllComponent,
    CountriesAddComponent,
    CountriesEditComponent,
    DivisionsAllComponent,
    DivisionsAddComponent,
    DivisionsEditComponent,
    AccountRequestMenuComponent,
    AccountRequestAllComponent,
    AccountRequestMgComponent,
    AccountRequestDenyComponent,
    AppointAllComponent,
    AppointMgComponent,
    AppointSetComponent,
    AuctionRequestMenuComponent,
    AuctionRequestAllComponent,
    TradingRequestMenuComponent,
    TradingRequestAllComponent,
    CatalogsMenuComponent,
    UsersAllComponent,
    UsersMgComponent,
    CattleAllComponent,
    CattleAddComponent,
    CattleEditComponent,
    GrainsAllComponent,
    GrainsAddComponent,
    GrainsEditComponent,
    MachinesAddComponent,
    MachinesAllComponent,
    MachinesEditComponent,
    PhonesAllComponent,
    PhonesAddComponent,
    PhonesEditComponent,
    StatesAllComponent,
    StatesAddComponent,
    StatesEditComponent,
    RequestTypeAllComponent,
    RequestTypeAddComponent,
    RequestTypeEditComponent,
    IdentifAllComponent,
    IdentifAddComponent,
    IdentifEditComponent,
    IdentifTypeAllComponent,
    IdentifTypeAddComponent,
    IdentifTypeEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class AdminModule { }
