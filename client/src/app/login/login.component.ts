import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { MdTooltipModule } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService, SignupComponent, MdDialog, MdSnackBar,
    MdTooltipModule ]
})
export class LoginComponent implements OnInit {
  private User: any = {};
  private User_info: any = {};
  constructor(public loginService: LoginService, private router: Router,
    public dialog: MdDialog, public snackBar: MdSnackBar) {
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
      this.snackBar.open('Login success !', '', {
        duration: 5000
      })
    }
  };

  onError(response) {
    this.snackBar.open('invalid email or password !', '', {
      duration: 5000
    })
  };

  onSubmit(value: any) {
    this.loginService.login(value).subscribe(
      response => this.onNext(response),
      response => this.onError(response));
  }

  openDialogSignUp() {
    this.dialog.open(SignupComponent, {
      height: '500px',
      width: '600px',
    });
  }
}
