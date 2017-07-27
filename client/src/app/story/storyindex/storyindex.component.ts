import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Story } from '../story.model';

@Component({
  selector: 'app-storyindex',
  templateUrl: './storyindex.component.html',
  styleUrls: ['./storyindex.component.css']
})
export class StoryindexComponent implements OnInit {
  stories: Story[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.stories = [
      new Story('Story 1', 'Description 1', 'image 1'),
      new Story('Story 2', 'Description 2', 'image 2'),
      new Story('Story 3', 'Description 3', 'image 3'),
      new Story('Story 4', 'Description 4', 'image 4'),
      new Story('Story 5', 'Description 5', 'image 5'),
      new Story('Story 6', 'Description 6', 'image 6'),
      new Story('Story 7', 'Description 7', 'image 7'),
      new Story('Story 8', 'Description 8', 'image 8'),
      new Story('Story 9', 'Description 9', 'image 9'),
    ];
  }

  ngOnInit() {
  }

  storyWasSelected(story: Story): void {
    console.log('Story was selected');
  }
}
