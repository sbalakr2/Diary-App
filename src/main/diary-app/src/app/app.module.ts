import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages/pages.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

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
    HttpModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
