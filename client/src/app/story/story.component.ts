import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  template: '<router-outlet></router-outlet>'
})
export class StoryComponent implements OnInit {
  public current_user: any;
  constructor() {}

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      location.href = '';
    }
  }
}
