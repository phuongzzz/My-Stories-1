import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../../app.routes';

@Injectable()
export class CreateStoryService {
  private apiURLStory;
  private apiURLCategory;
  constructor(private http: Http) {
    this.apiURLStory = URL + 'api/stories';
    this.apiURLCategory = URL + 'api/categories';
  }

  createStory(data: any, token: string): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLStory, data, options);
  }

  getCategory(): Observable<any> {
    const link = this.apiURLCategory;
    return this.http.get(link).map(response => response.json());
  }
}
