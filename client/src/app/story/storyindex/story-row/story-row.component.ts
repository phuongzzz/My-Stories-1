import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { Story } from '../../story.model';

@Component({
  selector: 'app-story-row',
  templateUrl: './story-row.component.html',
  styles: [
    `
      .phuong-custom-card {
        margin-bottom: 80px;
        box-shadow: none !important;
      }
    `
  ]
})

export class StoryRowComponent implements OnInit {
  @Input() story: Story;

  ngOnInit() {
   $('.phuong-custom-card').addClass('animated bounceInUp');
  }
}
