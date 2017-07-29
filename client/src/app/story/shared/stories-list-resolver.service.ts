import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StoryService } from './story.service';

@Injectable()
export class StoriesListResolverService implements Resolve<any> {
  constructor(private storyService: StoryService) { }
  resolve() {
    return this.storyService.getStories().map(stories => stories);
  }
}
