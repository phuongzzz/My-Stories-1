import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ SignupService ]
})
export class SignupComponent implements OnInit {

  constructor(public signupService: SignupService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['']);
    }
  }

  onSubmit(value: any) {
    this.signupService.signup(value).subscribe(response => {
      if (response) {
        alert('sign up success!');
      }
    });
  }
}
