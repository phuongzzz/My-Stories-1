import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { MdSnackBarModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { LoginService } from '../login/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ SignupService, MdSnackBarModule, MdDialog, LoginService ]
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;
  private User: any = {};
  private User_info: any = {};

  constructor(public signupService: SignupService,
    public loginService: LoginService,
    private router: Router,
    public snackBar: MdSnackBar,
    public dialog: MdDialog,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    }
  }

  createForm(email:string, password: string) {
    this.loginForm = this.formbuilder.group({
      sign_in: this.formbuilder.group({
        email: email,
        password: password
      })
    });
  }

  onSubmit(value: any) {
    this.signupService.signup(value).subscribe(response => {
      if (response) {
        this.snackBar.open("Sign up success", "", {
          duration: 5000
        })
        this.createForm(value.user.email, value.user.password);
        this.loginService.login(this.loginForm.value).subscribe( response => {
          if (response) {
            this.User = JSON.parse(response._body);
            this.User_info = this.User.data.user_info;
            localStorage.setItem('currentUser', JSON.stringify(this.User_info));
            location.reload();
          }
        })
      }
    });
  }
}

export interface User_login {
  sign_in: {
  email: string,
  password: string,
  }
}
