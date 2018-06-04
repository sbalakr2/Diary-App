import { Injectable } from '@angular/core';  
import { Page } from './page.model';
import { HttpClient } from '@angular/common/http';
 
 @Injectable()
 export class pageService {  

    constructor(private http: HttpClient) {

    }

    getPages() { 

        return this.http.get('api/v1/pages');
                
    } 

    getPageByDate() {
        
        let date = new Date();
        return this.http.get('api/v1/pages/'+date);
    }
 } 