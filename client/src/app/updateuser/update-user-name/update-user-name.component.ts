import { Component, OnInit } from '@angular/core';
import { InfoUserComponent } from '../../info-user/info-user.component';
import { UpdateUserService } from '../updateuser.service'

@Component({
  selector: 'app-update-user-name',
  templateUrl: './update-user-name.component.html',
  styles: [
    `
      .form {
        width: 500px;
      }
      
      .full-width {
        width: 100%;
      }
    `
  ],
  providers: [ InfoUserComponent, UpdateUserService ]
})
export class UpdateUserNameComponent implements OnInit {
  current_user: any;
  new_name: string;

  constructor(public updateUserSever: UpdateUserService) {
  }

  ngOnInit() {
  }

  onNext(response) {
    if (response.status === 200) {
      console.log('on');
    };
    location.reload();
  };

  onError(response) {
    console.log('dm');
  };

  onSubmit(value: any) {
    this.new_name = value.user.name;
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.updateUserSever.edit(this.current_user.id, this.current_user.token, value).subscribe(
      response => this.onNext(response),
      response => this.onError(response));
  }
}
