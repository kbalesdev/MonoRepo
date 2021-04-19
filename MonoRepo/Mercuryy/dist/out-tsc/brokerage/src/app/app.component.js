import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Order } from "projects/brokerage/src/app/models/order.model";
let AppComponent = class AppComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.title = 'brokerage';
        this.order = new Order();
    }
    ngOnInit() {
        this.getOrderById();
    }
    getOrderById() {
        this.orderService.getOrderById(333)
            .subscribe(order => {
            this.order = order;
            console.log(this.order);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map