import { Component, OnInit } from '@angular/core';
import { Order } from "projects/brokerage/src/app/models/order.model";
import { OrderService } from "projects/brokerage/src/app/services/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brokerage';

  order: Order;

  constructor(public orderService: OrderService) {
    this.order = new Order();
  }

  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById(): void {
    this.orderService.getOrderById(333)
      .subscribe(order => {
        this.order = order;
        console.log(this.order);
      });
  }
}
