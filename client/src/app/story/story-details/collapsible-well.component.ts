import { Component, Input } from '@angular/core';
import { IStep } from '../shared/story.model';
import { SubStepComponent } from './sub-step.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div class="" (click)="openSubStepDialog()">
      <h4 class="well-title">
        {{name}}
      </h4>
      <ng-content *ngIf="visible"></ng-content>
    </div>
  `
})

export class CollapsibleWellComponent {
  visible = true;
  @Input() name: string;
  @Input() step: IStep;
  constructor(private dialog: MdDialog) { }

  toggleContent() {
    this.visible = !this.visible;
  }

  openSubStepDialog() {
    const dialogRef = this.dialog.open(SubStepComponent, {
      height: '500px',
      width: '600px',
    });
    dialogRef.componentInstance.name = this.step.name;
    dialogRef.componentInstance.sub_steps = this.step.sub_steps;
  }
}
