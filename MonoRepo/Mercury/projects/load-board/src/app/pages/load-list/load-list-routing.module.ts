import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadListComponent } from './load-list.component';

const routes: Routes = [
  {path: '', component: LoadListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadListRoutingModule { }
