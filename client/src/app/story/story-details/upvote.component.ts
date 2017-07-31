import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  styleUrls: ['./upvote.component.scss'],
  template: `
    <button class="love-btn" md-fab (click)="onClick()">
      <i class="material-icons"
         [style.color]="iconColor">favorite
      </i>
    </button>
  `
})

export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();

  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
