import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { MdSnackBarModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ SignupService, MdSnackBarModule, MdDialog ]
})
export class SignupComponent implements OnInit {

  constructor(public signupService: SignupService,
    private router: Router,
    public snackBar: MdSnackBar,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    }
  }

  onSubmit(value: any) {
    this.signupService.signup(value).subscribe(response => {
      if (response) {
        this.snackBar.open("Sign up success", "", {
          duration: 5000
        })
      }
    });
  }

}
