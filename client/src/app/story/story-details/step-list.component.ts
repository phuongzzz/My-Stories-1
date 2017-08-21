import { Component, Input, OnDestroy } from '@angular/core';
import { IStep } from '../shared/story.model';
import { VoteService } from './vote.service';
import { MdDialog } from '@angular/material';
import { SubStepComponent } from './sub-step.component';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})

export class StepListComponent implements OnDestroy {

  current_user = JSON.parse(localStorage.currentUser);
  @Input() story_id: number;
  @Input() steps: IStep[];
  @Input() user_id: number;

  constructor(private dialog: MdDialog) { }

  ngOnDestroy() {
    this.dialog.closeAll();
  }

  openSubStepDialog(step) {
    const height = window.innerHeight * 0.9;
    const width = window.innerWidth * 0.8;
    const dialogRef = this.dialog.open(SubStepComponent, {
      height: height + 'px',
      width: width + 'px',
    });
    dialogRef.updatePosition({
      top: '5%'
    });
    dialogRef.componentInstance.name = step.name;
    dialogRef.componentInstance.step = step;
    dialogRef.componentInstance.story_id = this.story_id;
    dialogRef.componentInstance.user_id = this.user_id;
  }

  rate(id: number) :number{
    const substeps = this.steps[id].sub_steps;
    if (substeps.length === 0) {
      return 100;
    }
    const is_completed = substeps.filter(function (substep) {
      return substep.is_completed === true;
    }).length;
    return Math.round(is_completed / this.steps[id].sub_steps.length * 100);
  }
}
