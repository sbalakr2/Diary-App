// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cal',
//   templateUrl: './cal.component.html',
//   styleUrls: ['./cal.component.css']
// })
// export class CalComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarUtils } from 'angular-calendar';
import {
  addDays,
  addHours,
  startOfDay,
  subWeeks,
  startOfMonth,
  endOfMonth,
  addWeeks
} from 'date-fns';
import { GetMonthViewArgs, MonthView, getMonthView } from 'calendar-utils';

export class MyCalendarUtils extends CalendarUtils {
  getMonthView(args: GetMonthViewArgs): MonthView {
    args.viewStart = subWeeks(startOfMonth(args.viewDate), 1);
    args.viewEnd = addWeeks(endOfMonth(args.viewDate), 1);
    return getMonthView(args);
  }
}

// tslint:disable-next-line
@Component({
  selector: 'app-cal-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'cal.component.html',
  providers: [
    {
      provide: CalendarUtils,
      useClass: MyCalendarUtils
    }
  ]
})
export class CalComponent {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
}