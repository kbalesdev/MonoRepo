import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {

  _legNumber: number = 0;
  _orderNumber: number = 0;

  @Input()
  set legNumber(legNumber: number) {
    console.log(legNumber);
    this._legNumber = legNumber;
  }

  @Input()
  set orderNumber(orderNumber: number) {
    this._orderNumber = orderNumber;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
