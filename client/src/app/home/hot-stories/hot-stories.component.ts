import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { StoryService } from './hot-stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-stories',
  templateUrl: './hot-stories.component.html',
  styleUrls: ['./hot-stories.component.scss'],
  providers: [MdCardModule, StoryService],

})
export class HotStoriesComponent implements OnInit {
  storyList: any[];

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
    this.storyList = this.storyService.getAllStories();
  }
  onClickStory(id: number){
    this.router.navigate(['/story/' + id]);
  }

}
