import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DateComponent } from './date.component';
let DateModule = class DateModule {
};
DateModule = __decorate([
    NgModule({
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
], DateModule);
export { DateModule };
//# sourceMappingURL=date.module.js.map