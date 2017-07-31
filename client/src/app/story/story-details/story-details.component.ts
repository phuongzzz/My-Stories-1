import { Component, OnInit} from '@angular/core';
import { StoryService } from '../shared/story.service';
import { ActivatedRoute } from '@angular/router';
import { IStory } from '../shared/story.model';

@Component({
  templateUrl: './story-details.component.html'
})

export class StoryDetailsComponent implements OnInit {
  story: IStory;
  constructor(private storyService: StoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.story = this.storyService.getStory(+this.route.snapshot.params['id']);
  }
}
