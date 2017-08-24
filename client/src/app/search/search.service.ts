import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../constants';

@Injectable()
export class SearchService {
  private apiURL;
  private apiURLStory;
  constructor(private http: Http) {
    this.apiURL = URL + 'api/search';
    this.apiURLStory = URL + 'api/stories/';
  }

  search(data: any): Observable<any> {
    return this.http.get(this.apiURL +"?q="+  data);
  }

  getStep(data: number): Observable<any> {
    return this.http.get(this.apiURLStory + data);
  }

}
