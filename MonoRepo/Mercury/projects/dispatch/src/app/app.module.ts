import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibInfrastructureSharedModule } from 'projects/lib-infrastructure-shared/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibInfrastructureSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
