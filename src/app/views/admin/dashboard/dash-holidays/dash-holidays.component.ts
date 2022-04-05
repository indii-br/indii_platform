import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BrasilApiService } from 'src/app/services/brasil-api.service';

@Component({
  selector: 'app-dash-holidays',
  templateUrl: './dash-holidays.component.html',
  styleUrls: ['./dash-holidays.component.less']
})
export class DashHolidaysComponent implements OnInit {

  holidaysList: Array<any>;

  constructor(
    private brasilApi: BrasilApiService
  ) { }

  ngOnInit(): void {

    const month = moment().month();

    this.brasilApi.getUpcomingHolidays()
      .then(res => {
        this.holidaysList = res.filter(holiday => {
          const holidayMonth = moment(holiday.date).month();
          return holidayMonth >= month && holidayMonth <= month + 1;
        });
      })
      .catch(err => console.error(err))
  }
}
