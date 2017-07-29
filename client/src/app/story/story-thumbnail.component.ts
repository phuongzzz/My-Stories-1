import { Component, Input } from '@angular/core';
import { IStory } from './shared/story.model';

@Component({
  selector: 'app-story-thumbnail',
  templateUrl: './story-thumbnail.component.html',
  styleUrls: ['./story-thumbnail.component.scss']
})

export class StoryThumbnailComponent {
  @Input() story: IStory;

  getStoryTotalVotes() {
    if(this.story && this.story.total_vote > 5) {
      return 'green';
    }
    return '';
  }
}
