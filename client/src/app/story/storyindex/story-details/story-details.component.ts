import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../shared/story.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  templateUrl: './story-details.component.html'
})

export class StoryDetailsComponent implements OnInit {
  story: any;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit() {
    this.story = this.storyService.getStory(+this.route.snapshot.params['id']);
    $('.story-details').addClass('animated bounceInLeft');
  }
}
