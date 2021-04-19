import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LibInfrastructureSharedComponent } from './lib-infrastructure-shared.component';
import { LegModule } from './features/leg/leg.module';
import { DateModule } from './features/date/date.module';
let LibInfrastructureSharedModule = class LibInfrastructureSharedModule {
};
LibInfrastructureSharedModule = __decorate([
    NgModule({
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
], LibInfrastructureSharedModule);
export { LibInfrastructureSharedModule };
//# sourceMappingURL=lib-infrastructure-shared.module.js.map