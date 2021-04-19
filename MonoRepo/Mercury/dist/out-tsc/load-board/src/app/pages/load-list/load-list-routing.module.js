import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadListComponent } from './load-list.component';
const routes = [
    { path: '', component: LoadListComponent }
];
let LoadListRoutingModule = class LoadListRoutingModule {
};
LoadListRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], LoadListRoutingModule);
export { LoadListRoutingModule };
//# sourceMappingURL=load-list-routing.module.js.map