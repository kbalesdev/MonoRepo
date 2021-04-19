import { NgModule } from '@angular/core';
import { LibInfrastructureSharedComponent } from './lib-infrastructure-shared.component';
import { LegModule } from './features/leg/leg.module';
import { DateModule } from './features/date/date.module';



@NgModule({
  declarations: [
    LibInfrastructureSharedComponent
  ],
  imports: [
    LegModule,
    DateModule
  ],
  exports: [
    LibInfrastructureSharedComponent,
    LegModule,
    DateModule
  ]
})
export class LibInfrastructureSharedModule { }
