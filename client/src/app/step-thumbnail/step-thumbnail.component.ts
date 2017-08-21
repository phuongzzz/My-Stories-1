import { Component, Input } from '@angular/core';
import { IMG_URL } from '../app.routes';
import * as $ from 'jquery';

@Component({
  selector: 'app-step-thumbnail',
  templateUrl: './step-thumbnail.component.html',
  styleUrls: ['./step-thumbnail.component.scss']
})
export class StepThumbnailComponent {
  @Input() step: any;
}
