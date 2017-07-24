import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  private User: any = {};
  private User_info: any = {};
  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    }
  }

  onNext(response) {
    if (response) {
      this.User = JSON.parse(response._body);
      this.User_info = this.User.data.user_info;
      localStorage.setItem('currentUser', JSON.stringify(this.User_info));
    }
  };

  onError(response) {
    if (response) {
      alert('invalid email or password !');
    }
  };

  onCompleted() {
    location.href = '#';
  };

  onSubmit(value: any) {
    this.loginService.login(value).subscribe(this.onNext, this.onError, this.onCompleted);
  }
}
