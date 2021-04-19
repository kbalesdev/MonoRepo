import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { 'path': 'pages/load-list', loadChildren: () => import('./pages/load-list/load-list.module').then(mod => mod.LoadListModule) },
    { 'path': '', redirectTo: 'pages/load-list', pathMatch: 'full' },
    { 'path': '**', redirectTo: 'pages/load-list', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map