import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  private User: any = {};
  private User_info: any = {};
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  onNext(response) {
    if (response) {
      this.User = JSON.parse(response._body);
      this.User_info = this.User.data.user_info;
      window.localStorage.setItem('currentUser', JSON.stringify(this.User_info));
    }
  };

  onError(response) {
    if (response) {
      alert('invalid email or password !');
    }
  };

  onCompleted() {
    window.location.href = '#';
  };

  onSubmit(value: any) {
    this.loginService.login(value).subscribe(this.onNext, this.onError, this.onCompleted);
  }
}
