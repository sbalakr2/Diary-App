import { Component, OnInit } from '@angular/core';
import { pageService } from '../pages.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
  providers: [pageService]
})
export class PageEditComponent implements OnInit {
  page;
  title;
  content;
  date;

  constructor(private _pageService : pageService) { }

  ngOnInit() {

    //this.getTodaysPage();
  }

  getTodaysPage() {

    this._pageService.getPageByDate()
      .subscribe(
        (response: Response) => {
          // TODO: display data from objects
          console.log(response);
          if(response) { console.log('if');
            this.page = response;
            this.title = this.page.title;
            this.content = this.page.content;
            this.date = this.page.date_created;
          } else {
            
          }
        }
      )
  }

}
