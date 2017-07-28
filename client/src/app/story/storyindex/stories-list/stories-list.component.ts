import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../shared/story.service';

import { Story } from '../../story.model';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html'
})

export class StoriesListComponent implements OnInit {
  storyList: any[];

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.storyList = this.storyService.getAllStories();
  }
}
