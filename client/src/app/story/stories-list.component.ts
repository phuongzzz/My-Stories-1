import { Component, OnInit } from '@angular/core';
import { StoryService } from './shared/story.service';
import { ActivatedRoute} from '@angular/router';
import { IStory } from './shared/story.model';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./story-thumbnail.component.scss']
})

export class StoriesListComponent implements OnInit {
  stories: IStory[];
  constructor(private storyService: StoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.stories = this.route.snapshot.data['stories'];
  }
}
