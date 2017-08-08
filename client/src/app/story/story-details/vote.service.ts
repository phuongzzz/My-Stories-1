import { Injectable } from '@angular/core';
import { IStep } from '../shared/story.model';
import { Http, RequestOptions } from '@angular/http';
import { URL } from '../../app.routes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoteService {

  constructor(private http: Http) {}

  unvote(step: IStep, voter_id: number) {
    step.voters_id = step.voters_id.filter(voter => voter !== voter_id);
  }

  upvote(step: IStep, voter_id: number, token: string): Observable <any> {
    step.voters_id.push(voter_id);
    const headers: any = {'MS-AUTH-TOKEN': token};
    const options = new RequestOptions({headers: headers});
    return this.http.post(URL, options);
  }

  userHasVoted(step: IStep, voter_id: number) {
    return step.voters_id.some(voter => voter === voter_id);
  }

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
}
