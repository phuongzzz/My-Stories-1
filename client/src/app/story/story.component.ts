import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  template: `
    <div class="hdd">
    <router-outlet></router-outlet>
    </div>`,
  styles: [`
    .hdd {
      /*background-image: url("");*/
      height: 100vh;
      background-size: cover;
    }
  `],
  providers: [ ]

})
export class StoryComponent implements OnInit {
  public stories: any
  constructor() {}

  ngOnInit() {

  }

  onSuccess(response) {
    const stories = response.data.stories;
    console.log(this.stories);
  }
}
