import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LegComponent = class LegComponent {
    constructor() {
        this._legNumber = 0;
        this._orderNumber = 0;
    }
    set legNumber(legNumber) {
        console.log(legNumber);
        this._legNumber = legNumber;
    }
    set orderNumber(orderNumber) {
        this._orderNumber = orderNumber;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], LegComponent.prototype, "legNumber", null);
__decorate([
    Input()
], LegComponent.prototype, "orderNumber", null);
LegComponent = __decorate([
    Component({
        selector: 'lib-leg',
        templateUrl: './leg.component.html',
        styleUrls: ['./leg.component.css']
    })
], LegComponent);
export { LegComponent };
//# sourceMappingURL=leg.component.js.map