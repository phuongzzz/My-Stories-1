import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupService {
  private apiURL = 'http://localhost:3000/api/sign_up';
  constructor( private http: Http ) {
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.apiURL, data);
  }
}
