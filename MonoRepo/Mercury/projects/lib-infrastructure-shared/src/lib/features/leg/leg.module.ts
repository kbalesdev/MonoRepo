import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LegComponent } from './leg.component';



@NgModule({
  declarations: [
    LegComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LegComponent
  ]
})
export class LegModule { }
