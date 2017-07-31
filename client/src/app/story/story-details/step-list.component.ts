import { Component, Input, OnInit } from '@angular/core';
import { IStep } from '../shared/story.model';
import { VoteService } from './vote.service';
import { MdDialog } from '@angular/material';
import { SubStepComponent } from './sub-step.component';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})

export class StepListComponent implements OnInit {

  current_user_id = JSON.parse(localStorage.currentUser).id;

  constructor(private voteService: VoteService,
    private dialog: MdDialog) { }

  @Input() steps: IStep[];
  @Input() step: IStep;
  ngOnInit() {
  }

  toggleVote(step: IStep) {
    if(this.userHasVoted(step)) {
      this.voteService.unvote(step, this.current_user_id);
    } else {
      this.voteService.upvote(step, this.current_user_id);
    }
  }

  userHasVoted(step: IStep) {
    return this.voteService.userHasVoted(step, this.current_user_id);
  }

  openSubStepDialog(step) {
    const dialogRef = this.dialog.open(SubStepComponent, {
      height: '500px',
      width: '600px',
    });
    dialogRef.componentInstance.name = step.name;
    dialogRef.componentInstance.sub_steps = step.sub_steps;
  }

}
