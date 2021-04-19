import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { DateComponent } from './date.component';



@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    DateComponent
  ]
})
export class DateModule { }
