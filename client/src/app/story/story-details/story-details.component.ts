import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStory } from '../shared/story.model';
import { StoryResolverService } from '../shared/story-resolver.service';
import { VoteService } from './vote.service';
import * as $ from 'jquery';

@Component({
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
  providers: [StoryResolverService, VoteService]
})

export class StoryDetailsComponent implements OnInit {
  story: IStory;
  image_url = 'http://res.cloudinary.com/my-stories/';
  current_user: any;

  constructor(private route: ActivatedRoute, private voteService: VoteService) {
  }

  ngOnInit() {
    this.story = this.route.snapshot.data['story'];
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.checkVoted();
  }

  onComment() {
    window.scroll(0, window.innerHeight);
    $('#cmt_target').focus();
  }

  onVote() {
    this.voteService.voteStory(this.story.id, this.current_user.token).subscribe(
      response => this.onVoteSuccess(response),
      response => this.onVoteError(response));
  }

  onVoteSuccess(response) {
    if (response) {
      const total_vote = JSON.parse(response._body).data.total_vote;
      this.story.total_vote = total_vote;
      if ($('#heart').hasClass('voted')) {
        $('#heart').removeClass('voted');
      } else {
        $('#heart').addClass('voted');
      }
    }
  }

  onVoteError(response) {
    console.log(response);
  }

  checkVoted() {
    const user_voted = this.story.users_voted;
    if (user_voted.find(user => user.id === this.current_user.id)) {
      $('#heart').addClass('voted');
    } else {
      $('#heart').removeClass('voted');
    }
  }
}
