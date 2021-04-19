import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadListRoutingModule } from './load-list-routing.module';
import { LoadListComponent } from './load-list.component';
import { LibInfrastructureSharedModule } from 'projects/lib-infrastructure-shared/src/public-api';
let LoadListModule = class LoadListModule {
};
LoadListModule = __decorate([
    NgModule({
        declarations: [
            LoadListComponent
        ],
        imports: [
            CommonModule,
            LoadListRoutingModule,
            LibInfrastructureSharedModule
        ]
    })
], LoadListModule);
export { LoadListModule };
//# sourceMappingURL=load-list.module.js.map