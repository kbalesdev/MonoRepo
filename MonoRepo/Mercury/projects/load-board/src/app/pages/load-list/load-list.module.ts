import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadListRoutingModule } from './load-list-routing.module';
import { LoadListComponent } from './load-list.component';
import { LibInfrastructureSharedModule } from 'projects/lib-infrastructure-shared/src/public-api';


@NgModule({
  declarations: [
    LoadListComponent
  ],
  imports: [
    CommonModule,
    LoadListRoutingModule,
    LibInfrastructureSharedModule
  ]
})
export class LoadListModule { }
