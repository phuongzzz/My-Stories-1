import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-create',
  template: '<router-outlet></router-outlet>'
})
export class CreateComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      location.href = '';
    }
  }
}
