import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app.routes';
import { User } from '../info-user/user'

@Injectable()
export class UpdateUserService {
  private apiURL;
  user: any;
  constructor( private http: Http ) {
    this.apiURL = URL + 'api/users/';
  }

  edit(id: number, token: string, data: any): Observable<any> {
    const link = this.apiURL + id;
    const headers: any = {'MS-AUTH-TOKEN': token };
    const options = new RequestOptions({headers: headers});
    console.log(data);
    return this.http.patch(link, data, options);
  }
}
