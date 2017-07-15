import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  onNext(response) {
    if (response) {
      alert('login success !');
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
