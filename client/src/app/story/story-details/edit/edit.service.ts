import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../../../constants';

@Injectable()
export class EditStoryService {
  private apiURLStory;
  constructor(private http: Http) { }

  editStory(story_id: number, data: any, token: string): Observable<any> {
    this.apiURLStory = URL + 'api/stories/' + story_id;
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    return this.http.patch(this.apiURLStory, data, options);
  }
}
