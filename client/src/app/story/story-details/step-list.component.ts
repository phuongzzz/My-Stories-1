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

  constructor(private voteService: VoteService,
    private dialog: MdDialog) { }

  ngOnDestroy() {
    this.dialog.closeAll();
  }

  toggleVote(step: IStep) {
    if (this.userHasVoted(step)) {
      this.voteService.unvote(step, this.current_user.id);
    } else {
      this.voteService.upvote(step, this.current_user.id, this.current_user.token);
    }
  }

  userHasVoted(step: IStep) {
    return this.voteService.userHasVoted(step, this.current_user.id);
  }

  openSubStepDialog(step) {
    const dialogRef = this.dialog.open(SubStepComponent, {
      height: '82%',
      width: '75%'
    });
    dialogRef.componentInstance.name = step.name;
    dialogRef.componentInstance.sub_steps = step.sub_steps;
    dialogRef.componentInstance.step = step;
    dialogRef.componentInstance.story_id = this.story_id;
  }

}
