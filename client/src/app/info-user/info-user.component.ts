import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { InfoUserService } from './info-user.service';
import { MdTooltipModule } from '@angular/material';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.components.scss'],
  providers: [InfoUserService, MdTooltipModule]
})

export class InfoUserComponent implements OnInit {
  current_user: any;
  user: User;
  user_id: number;
  user_name: string;
  user_email: string;
  stories: any;
  position = 'before';
  constructor(private infoUser: InfoUserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      if (this.route.snapshot.params['id']){
        this.user_id = +this.route.snapshot.params['id'];
        this.current_user = JSON.parse(localStorage.getItem('currentUser'));
        this.infoUser.getInforUser(+this.route.snapshot.params['id'], this.current_user.token).
          subscribe(response => this.onSuccess(response));
      } else {
        this.current_user = JSON.parse(localStorage.getItem('currentUser'));
        this.user_id = this.current_user.id;
        this.infoUser.getInforUser(this.current_user.id, this.current_user.token).
          subscribe(response => this.onSuccess(response));
      }
    } else {
      location.href = '';
    }
  }

  checkPageCurrentUser() {
    if (JSON.parse(localStorage.getItem('currentUser')).id === this.user_id){
      return true
    };
    return false;
  }

  onClickMore(id : number){
    this.router.navigate(['/story/' + id])
  }
  onSuccess(response) {
    const user = response.data.user;
    this.user = new User(user.id, user.name, user.email, user.avatar, user.stories);
    this.user_name = user.name;
    this.user_email = user.email;
    this.stories = user.stories;
    console.log(this.stories);
  }
}
