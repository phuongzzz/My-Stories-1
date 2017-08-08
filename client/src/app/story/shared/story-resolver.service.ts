import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { StoryService } from './story.service';

@Injectable()
export class StoryResolverService implements Resolve<any> {
  constructor(private storyService: StoryService) { }
  resolve(snap: ActivatedRouteSnapshot) {
    const id = +snap.params['id'];
    return this.storyService.getStory(id).map(story => story);
  }
}
