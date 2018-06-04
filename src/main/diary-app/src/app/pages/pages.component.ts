import { Component, OnInit } from '@angular/core';

import { pageService } from './pages.service';

import { Page } from './page.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [pageService]
})
export class PagesComponent implements OnInit {
  editMode = true;
  searchMode = false;
  page;
  
  constructor(private _pageService : pageService) { }

  ngOnInit() {

  }

  getTodaysPage() {

    this._pageService.getPageByDate()
      .subscribe(
        (response: Response) => {
          
          console.log(response);
          this.page = response;
        }
      )
  }

}
