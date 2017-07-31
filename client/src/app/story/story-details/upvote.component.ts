import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  styleUrls: ['./upvote.component.scss'],
  template: `
    <div class="votingWidgetContainer" 
      (click)="onClick()">
      <div class="votingWidget" class="text-center">
        <button md-fab>
          <i class="material-icons"
             [style.color]="iconColor">favorite
          </i>
        </button>
        <p class="votes_count">{{count}}</p>
      </div>
    </div>
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
