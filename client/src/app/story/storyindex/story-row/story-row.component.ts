import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { Story } from '../../story.model';

@Component({
  selector: 'app-story-row',
  templateUrl: './story-row.component.html',
  styleUrls: ['./story-row.component.css']
})

export class StoryRowComponent implements OnInit {
  @Input() story: Story;

  ngOnInit() {
    $('.phuong-custom-card').addClass('animated bounceInUp');
  }
}
