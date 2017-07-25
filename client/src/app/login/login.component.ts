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
    if (response.status === 200) {
      console.log('vl');
      this.User = JSON.parse(response._body);
      this.User_info = this.User.data.user_info;
      localStorage.setItem('currentUser', JSON.stringify(this.User_info));
      location.reload();
    }
  };

  onError(response) {
    if (response) {
      alert('invalid email or password !');
    }
  };

  onSubmit(value: any) {
    this.loginService.login(value).subscribe(
      response => this.onNext(response),
      response => this.onError(response));
  }
}
