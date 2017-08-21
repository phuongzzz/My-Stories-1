import { Injectable } from '@angular/core';
import { IStep } from '../shared/story.model';
import { Http, RequestOptions } from '@angular/http';
import { URL } from '../../app.routes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoteService {

  constructor(private http: Http) {}

  voteStory(story_id: number , token: string): Observable<any> {
    const apiurl = URL + 'api/stories/' + story_id + '/vote';
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(apiurl, null, options);
  }

  voteStep(story_id: number, step_id: number, token: string): Observable<any> {
    const apiurl = URL + 'api/stories/' + story_id + '/steps/' + step_id + '/vote';
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(apiurl, null, options);
  }

  checkToggle(story_id: number, step_id: number,
    sub_step_id: number, token: string): Observable<any> {
    const apiurl = URL + 'api/stories/' + story_id + '/steps/' + step_id +
      '/sub_steps/' + sub_step_id;
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.patch(apiurl, null, options);
  }
}
