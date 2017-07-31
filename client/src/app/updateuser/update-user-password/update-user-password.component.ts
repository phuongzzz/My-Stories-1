import { Component, OnInit } from '@angular/core';
import { InfoUserComponent } from '../../info-user/info-user.component'
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';


@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
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
  providers: [ InfoUserComponent ]
})
export class UpdateUserPasswordComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value)
  }
}
