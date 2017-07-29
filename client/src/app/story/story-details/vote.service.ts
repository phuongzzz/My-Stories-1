import { Injectable } from '@angular/core';
import { IStep} from '../shared/story.model';

@Injectable()
export class VoteService {
  unvote(step: IStep, voter_id: number) {
    step.voters_id = step.voters_id.filter(voter => voter !== voter_id);
  }

  upvote(step: IStep, voter_id: number) {
    step.voters_id.push(voter_id);
  }

  userHasVoted(step: IStep, voter_id: number) {
    return step.voters_id.some(voter => voter === voter_id);
  }
}
