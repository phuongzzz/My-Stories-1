import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app.routes';
import { User } from './user'
import 'rxjs/add/operator/map'

@Injectable()
export class InfoUserService {
  private apiURL;
  constructor(private http: Http) {
    this.apiURL = URL + 'api/users/';
  }

  getInforUser(id: number, token: string): Observable<any> {
    const link = this.apiURL + id;
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    return this.http.get(link, options).map(response => response.json());
  }
}
