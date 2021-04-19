import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:37210/api/order';
    }
    getOrderById(id) {
        return this.http.get(`${this.baseUrl}/getById/${id}`);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map