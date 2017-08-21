import { Component, OnInit } from '@angular/core';
import { StoryService } from './shared/story.service';
import { ActivatedRoute} from '@angular/router';
import { IStory } from './shared/story.model';
import {MdDialog} from '@angular/material';
import { SignupComponent } from '../signup/signup.component'

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
  providers: [SignupComponent]
})

export class StoriesListComponent implements OnInit {

  stories_categories: any[];
  constructor(private storyService: StoryService,
    private route: ActivatedRoute,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.storyService.getStoriesWithCategories().subscribe(
      (stories_categories) => {
        this.stories_categories = stories_categories
      }
    )
  }

  opendialog(){
    this.dialog.open(SignupComponent);
  }

  checkSignedIn(): boolean {
    return localStorage.getItem('currentUser') === null;
  }
}
