import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions } from '@angular/http';
import { URL } from '../../../constants';

@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  postCommentStory(content: any, story_id: number, token: string): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(URL + 'api/stories/' + story_id + '/comments', content, options);
  }

  postCommentStep(content: any, story_id: number, step_id: number, token: string): Observable<any> {
    const url = URL + 'api/stories/' + story_id + '/steps/' + step_id + '/comments';
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, content, options);
  }

  deleteCommentStory(id: number, token: string, story_id: number): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    const url = URL + 'api/stories/' + story_id + '/comments/' + id;
    return this.http.delete(url, options);
  }

  deleteCommentStep(id: number, token: string, story_id: number, step_id: number): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    const url = URL + 'api/stories/' + story_id + '/steps/' + step_id + '/comments/' + id;
    return this.http.delete(url, options);
  }

  editCommentStory(content: any, story_id: number, token: string, id: number): Observable<any> {
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.patch(URL + 'api/stories/' + story_id + '/comments/' + id, content, options);
  }

  editCommentStep(content: any, story_id: number, step_id: number,
    token: string, id: number): Observable<any> {
    const url = URL + 'api/stories/' + story_id + '/steps/' + step_id + '/comments/' + id;
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.patch(url, content, options);
  }
}
