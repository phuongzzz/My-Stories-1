import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Story } from '../story.model';

@Component({
  selector: 'app-storyindex',
  templateUrl: './storyindex.component.html',
  styleUrls: ['./storyindex.component.css']
})
export class StoryindexComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit() {
  }
}
