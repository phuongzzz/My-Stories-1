import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { IStory, IStep } from '../shared/story.model';
import { Http, Response } from '@angular/http';
import { URL } from '../../app.routes';

@Injectable()
export class StoryService {

  constructor(private http: Http) {}

  getStories(): Observable<IStory[]> {
    return this.http.get(URL + 'api/stories').map((response: Response) => {
      return <IStory[]>response.json().data.stories
    });
  }

  getStory(id: number): Observable<IStory> {
    return this.http.get(URL + 'api/stories/' + id).map((response: Response) => {
      return <IStory>response.json().data.story
    });
  }
}
