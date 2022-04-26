import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//ROUTING
// import { CATCARDS_ROUTING } from "./shared/components/category-cards/catcards-routing.module";
// import { AUCTION_ROUTING } from "./modules/auction/auction-routing.module";
// import { EXT_LOGIN_ROUTING } from "./modules/auth/auth-routing.module";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    MaterialModule,
    
    //ROUTING
    AppRoutingModule,
    
    BrowserAnimationsModule,
          ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
