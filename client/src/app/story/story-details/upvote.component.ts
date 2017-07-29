import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  styleUrls: ['./upvote.component.scss'],
  template: `
    <div class="votingWidgetContainer pointable"
         (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="material-icons"
            [style.color]="iconColor">favorite</i>
        </div>
        <div class="votingCount">
          <div>
            <i class="material-icons">pets</i>
            {{count}}</div>
        </div>
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
