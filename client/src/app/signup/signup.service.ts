import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../constants';

@Injectable()
export class SignupService {
  private apiURL;
  constructor( private http: Http ) {
    this.apiURL = URL + 'api/sign_up';
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.apiURL, data);
  }
}
