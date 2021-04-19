import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 'path': 'pages/load-list', loadChildren: () => import('./pages/load-list/load-list.module').then(mod => mod.LoadListModule) },
  { 'path': '', redirectTo: 'pages/load-list', pathMatch: 'full' },
  { 'path': '**', redirectTo: 'pages/load-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
