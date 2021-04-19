import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'lib-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  readonly baseUrl = 'http://localhost:37210/api/order';
  currentTime: Date;

  constructor(private http: HttpClient) {
    this.currentTime = new Date();
  }

  ngOnInit(): void {
    setInterval(() => this.getCurrentDate(), 1000);
  }

  getDate(): Observable<Date> {
    return this.http.get<Date>(`${this.baseUrl}/getDate`);
  }

  getCurrentDate(): void {
    this.getDate()
      .subscribe(currentTime => {
        this.currentTime = currentTime;
      });
  }

}
