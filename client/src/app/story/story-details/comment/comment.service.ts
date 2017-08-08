import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions } from '@angular/http';
import { URL } from '../../../app.routes';

@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  postCommentStory(content: any, story_id: number, token: string): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(URL + 'api/stories/' + story_id + '/comments', content, options);
  }

  postCommentStep(content: any, story_id , step_id: number, token: string): Observable<any> {
    const url = URL + 'api/stories/' + story_id + '/steps/' + step_id + '/comments';
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, content, options);
  }
}
