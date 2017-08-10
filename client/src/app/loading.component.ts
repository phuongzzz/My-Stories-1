import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template:
    `
      <div class="loading-box" style="height: auto;">
        <md-spinner class="custom"></md-spinner>
        <p>{{'loading' | translate}}</p>
      </div>
    `,
  styleUrls: ['./app.component.css']
})

export class LoadingComponent {
  constructor() { }
}


