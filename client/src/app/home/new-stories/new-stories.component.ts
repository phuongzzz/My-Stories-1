import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { StoryService } from './new-stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss'],
  providers: [MdCardModule, StoryService],
})
export class NewStoriesComponent implements OnInit {
  storyList: any[];

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
    this.storyList = this.storyService.getAllStories();
  }

  onClickStory(id: number){
    this.router.navigate(['/story/' + id]);
  }

}
