import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { InfoUserService } from './info-user.service';
import { MdTooltipModule } from '@angular/material';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.components.scss'],
  providers: [InfoUserService, MdTooltipModule]
})

export class InfoUserComponent implements OnInit {
  current_user: any;
  user: User;
  user_name: string;
  user_email: string;
  position = 'before';
  constructor(private infoUser: InfoUserService) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.current_user = JSON.parse(localStorage.getItem('currentUser'));
      this.infoUser.getInforUser(this.current_user.id, this.current_user.token).
        subscribe(response => this.onSuccess(response));
    } else {
      location.href = '';
    }
  }

  onSuccess(response) {
    const user = response.data.user;
    this.user = new User(user.id, user.name, user.email, user.avatar);
    this.user_name = user.name;
    this.user_email = user.email;
  }
}
