import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { LoginComponent } from '../login/login.component'
import { MdDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { InfoUserComponent } from '../info-user/info-user.component'
import * as $ from 'jquery';
import { EditUserDialogComponent } from '../info-user/user-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LogoutService, LoginComponent]
})

export class HeaderComponent implements OnInit {
  private current_user: any;
  constructor(public logoutService: LogoutService, public dialog: MdDialog) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    }

    $(window).on('scroll', function () {
      var wn = $(window).scrollTop();
      if (wn > 120) {
        $('.navbar').removeClass('custom-nav');
        $('.navbar').addClass('navbar-inverse');
      }
      else {
        $('.navbar').removeClass('navbar-inverse');
        $('.navbar').addClass('custom-nav');
      }
    });
  }

  onNext() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
    this.current_user = {};
    sessionStorage.clear();
  };

  onError() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
    this.current_user = {};
    sessionStorage.clear();
    location.reload();
  }

  onComplete() {
    location.reload();
  }

  onClick() {
    this.logoutService.logout(this.current_user.token).subscribe(this.onNext,
      this.onError, this.onComplete);
  }

  openDialogLogIn() {
    this.dialog.open(LoginComponent, {
      height: '350px',
      width: '450px'
    });
  }

  openDialogSignUp() {
    this.dialog.open(SignupComponent, {
      height: '500px',
      width: '600px'
    });
  }
  openDialogInfoUser() {
    this.dialog.open( EditUserDialogComponent, {
      height: '300px',
      width: '800px',
    });
  }
}
