import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ LogoutService ]
})
export class HeaderComponent implements OnInit {
  private current_user: any;
  constructor(public logoutService: LogoutService) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    }
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
}
