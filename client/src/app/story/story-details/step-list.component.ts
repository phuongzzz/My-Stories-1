import { Component, Input } from '@angular/core';
import { IStep } from '../shared/story.model';
import { VoteService } from './vote.service';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html'
})

export class StepListComponent {

  current_user_id = JSON.parse(localStorage.currentUser).id;

  constructor(private voteService: VoteService) { }

  @Input() steps: IStep[];

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
}
