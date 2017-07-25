import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Story } from '../../story.model';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html'
})

export class StoriesListComponent {
  @Input() storyList: Story[];

  constructor() {
  }
}
