import { Component, Input, AfterViewInit } from '@angular/core';
import { IStory } from './shared/story.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-story-thumbnail',
  templateUrl: './story-thumbnail.component.html',
  styleUrls: ['./story-thumbnail.component.scss']
})

export class StoryThumbnailComponent implements AfterViewInit {
  @Input() story: IStory;

  ngAfterViewInit() {
    $('.phuong-custom-card').addClass('animated bounceInUp');
  }
  getStoryTotalVotes() {
    if (this.story && this.story.total_vote > 5) {
      return 'green';
    }
    return '';
  }

  checkImageExist() {
    const picture = <any>this.story.picture;
    return !!picture.url;
  }
}
