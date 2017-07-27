import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app.routes';

@Injectable()
export class UpdateUserService {
  private apiURL;
  constructor( private http: Http ) {
    this.apiURL = URL + 'api/users/edit';
  }

  edit(data: any): Observable<any> {
    return this.http.get(this.apiURL, data);
  }
}
