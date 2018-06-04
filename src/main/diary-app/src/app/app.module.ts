import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages/pages.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { pageService } from './pages/pages.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PagesComponent,
    PageListComponent,
    PageEditComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [pageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
