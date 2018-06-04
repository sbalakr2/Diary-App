import { Component, OnInit } from '@angular/core';
import { PageDetail } from '../pageDetail.model';
import { pageService } from '../pages.service';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
  providers: [pageService]
})
export class PageListComponent implements OnInit {
  //pages: Page[] = [];
  page_list;

  constructor(private _pageService : pageService) { }

  ngOnInit() {

    this._pageService.getPages()
      .subscribe(
        (response: Response) => {
          
          console.log(response);
          this.page_list = response;
        }
      )
  }

  getFormattedItem(page) {
    
      return page.creationDate + ": " + page.title;
  }

}
