import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DateComponent = class DateComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:37210/api/order';
        this.currentTime = new Date();
    }
    ngOnInit() {
        setInterval(() => this.getCurrentDate(), 1000);
    }
    getDate() {
        return this.http.get(`${this.baseUrl}/getDate`);
    }
    getCurrentDate() {
        this.getDate()
            .subscribe(currentTime => {
            this.currentTime = currentTime;
        });
    }
};
DateComponent = __decorate([
    Component({
        selector: 'lib-date',
        templateUrl: './date.component.html',
        styleUrls: ['./date.component.css']
    })
], DateComponent);
export { DateComponent };
//# sourceMappingURL=date.component.js.map