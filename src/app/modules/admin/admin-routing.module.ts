import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RolesAllComponent } from './components/cats/roles/roles-all/roles-all.component';
import { RolesAddComponent } from './components/cats/roles/roles-add/roles-add.component';
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
import { AccountRequestAllComponent } from './components/account-request/account-request-all/account-request-all.component';
import { AccountRequestMenuComponent } from './components/account-request/account-request-menu/account-request-menu.component';
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
import { CreateAccountComponent } from './components/account-request/appoint/create-account/create-account.component';
import { UsersAllComponent } from './components/users/users-all/users-all.component';
import { UsersMgComponent } from './components/users/users-mg/users-mg.component';
import { CattleAllComponent } from './components/cats/products/cattle/cattle-all/cattle-all.component';
import { CattleAddComponent } from './components/cats/products/cattle/cattle-add/cattle-add.component';
import { CattleEditComponent } from './components/cats/products/cattle/cattle-edit/cattle-edit.component';
import { MachinesAllComponent } from './components/cats/products/machines/machines-all/machines-all.component';
import { MachinesAddComponent } from './components/cats/products/machines/machines-add/machines-add.component';
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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'admin-home', component:AdminHomeComponent},

      // account-request
      {path: 'account-request-menu', component: AccountRequestMenuComponent },
      {path: 'account-request-all', component: AccountRequestAllComponent },
      {path: 'account-request-mg', component: AccountRequestMgComponent },
      {path: 'account-request-deny', component: AccountRequestDenyComponent },
      {path: 'appoint-all', component: AppointAllComponent },
      {path: 'appoint-mg', component: AppointMgComponent },
      {path: 'appoint-set', component: AppointSetComponent },
      {path: 'create-account', component: CreateAccountComponent },

      // auction-request
      {path: 'auction-request-menu', component: AuctionRequestMenuComponent},
      {path: 'auction-request-all', component: AuctionRequestAllComponent},

      // trading-request
      {path: 'trading-request-menu', component: TradingRequestMenuComponent},
      {path: 'trading-request-all', component: TradingRequestAllComponent},

      // users
      {path: 'users-all', component: UsersAllComponent},
      {path: 'users-mg', component: UsersMgComponent},

      //catalogs
      {path: 'catalogs-menu', component: CatalogsMenuComponent},
      //countries
      {path: 'countries', component: CountriesAllComponent},
      {path: 'countries-add', component: CountriesAddComponent},
      {path: 'countries-edit', component: CountriesEditComponent},
      //administrative division
      {path: 'divisions', component: DivisionsAllComponent},
      {path: 'divisions-add', component: DivisionsAddComponent},
      {path: 'divisions-edit', component: DivisionsEditComponent},
      // Tipos de identificación
      {path: 'identif-types', component: IdentifTypeAllComponent},
      {path: 'identif-types-add', component: IdentifTypeAddComponent},
      {path: 'identif-types-edit', component: IdentifTypeEditComponent},
      //identification
      {path: 'identif', component: IdentifAllComponent},
      {path: 'identif-add', component: IdentifAddComponent},
      {path: 'identif-edit', component: IdentifEditComponent},
      //phones
      {path: 'phones', component: PhonesAllComponent},
      {path: 'phones-add', component: PhonesAddComponent},
      {path: 'phones-edit', component: PhonesEditComponent},
      //products__cattle
      {path:'cattle', component: CattleAllComponent},
      {path:'cattle-add', component: CattleAddComponent},
      {path:'cattle-edit', component: CattleEditComponent},
      //products__grains
      {path: 'grains', component: MachinesAllComponent},
      {path: 'grains-add', component: MachinesAddComponent},
      {path: 'grains-edit', component: MachinesEditComponent},
      //products__machines
      {path: 'machines', component: MachinesAllComponent},
      {path: 'machines-add', component: MachinesAddComponent},
      {path: 'machines-edit', component: MachinesEditComponent},
      //regions
      {path: 'regions', component: RegionsAllComponent},
      {path: 'regions-add', component: RegionsAddComponent},
      {path: 'regions-edit', component: RegionsEditComponent},
      //request-type
      {path: 'request-type', component: RequestTypeAllComponent},
      {path: 'request-type-add', component: RequestTypeAddComponent},
      {path: 'request-type-edit', component: RequestTypeEditComponent},
      //roles
      {path: 'roles', component: RolesAllComponent},
      {path: 'roles-add', component: RolesAddComponent},
      {path: 'roles-edit/:id', component: RolesEditComponent},
      //states
      {path: 'states', component: StatesAllComponent},
      {path: 'states-add', component: StatesAddComponent},
      {path: 'states-edit', component: StatesEditComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
