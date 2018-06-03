import { Component, OnInit } from '@angular/core';

import { Page } from '../page.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pages: Page[] = [];

  constructor() { }

  ngOnInit() {

    this.pages.push(new Page('My diary 1', '2018-06-02', 'blah blah blah'));
    this.pages.push(new Page('My diary 2', '2018-06-02', 'blah blah blah'));
    console.log(this.pages);
  }

  getFormattedItem(page) {
    
      // call a service 
      return page.date + ": " + page.title;
  }

}
