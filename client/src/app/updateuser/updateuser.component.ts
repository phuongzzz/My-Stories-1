import { Component, OnInit } from '@angular/core';
import { UpdateUserService } from './updateuser.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { UpdateUserNameComponent } from './update-user-name/update-user-name.component'

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
  providers: [ UpdateUserService, FormBuilder ]
})

export class UpdateUserComponent implements OnInit {
  EditUserForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router,
    public updateuserService: UpdateUserService, public dialog: MdDialog) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.EditUserForm = this.formbuilder.group({
      name: '',
      email: '',
      current_password: '',
      password: '',
      password_confirmation: ''
    });
  }
  onSubmit(value: any) {
    console.log('aa')
    this.updateuserService.edit(value).subscribe(response => {
      if (response) {
        alert('update success!');
      }
    });
  }
  onUpdateName(){
    this.dialog.open(UpdateUserNameComponent)
  }
}
