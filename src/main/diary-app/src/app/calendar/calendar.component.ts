import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  pageDate;

  constructor() { }

  ngOnInit() {
    let d: Date = new Date();
    this.pageDate = d.getFullYear()+'-'+("0"+(d.getMonth()+1)).slice(-2)+'-'+("0" + d.getDate()).slice(-2);
  }
  
  getPage(e) {

    console.log(e);
  }

}
