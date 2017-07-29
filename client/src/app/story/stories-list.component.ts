import { Component, OnInit } from '@angular/core';
import { StoryService } from './shared/story.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html'
})

export class StoriesListComponent implements OnInit {
  stories: any[];
  constructor(private storyService: StoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.stories = this.route.snapshot.data['stories'];
  }
}
