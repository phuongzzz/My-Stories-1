import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { IStory, IStep } from '../shared/story.model';
import { Http, Response, RequestOptions } from '@angular/http';
import { URL } from '../../constants';

@Injectable()
export class StoryService {

  constructor(private http: Http) {}

  getStories(): Observable<IStory[]> {
    return this.http.get(URL + 'api/stories').map((response: Response) => {
      return <IStory[]>response.json().data.stories
    });
  }

  getStoriesByCatetories(category_id: number) {
    return this.http.get(URL + '/api/stories' + '?category_id=' + category_id).map((res: Response) => {
      return res.json().data
    });
  }

  getStoriesWithCategories(): Observable<any[]> {
    return this.http.get(URL + '/api/categories').map((res: Response) => {
      return <IStory[]>res.json().data.categories;
    });
  }

  getStory(id: number): Observable<IStory> {
    return this.http.get(URL + 'api/stories/' + id).map((response: Response) => {
      return <IStory>response.json().data.story
    });
  }

  deleteStory(id: number, token: string): Observable<any> {
    const apiurl = URL + 'api/stories/' + id;
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    return this.http.delete(apiurl, options);
  }

  cloneStory(id: number, token: string) {
    const link = URL + 'api/stories/' + id + '/clones';
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    return this.http.post(link, id, options)
  }
}
