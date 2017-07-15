import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private apiURL = 'http://localhost:3000/api/sign_in';
  constructor(private http: Http) {
  }

  login(data: any): Observable<any> {
    return this.http.post(this.apiURL, data);
  }
}
