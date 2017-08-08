import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IStep } from '../shared/story.model';
import * as jQuery from 'jquery';
import * as $ from 'jquery';
import { VoteService } from './vote.service';

@Component({
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss'],
  providers: [VoteService]
})

export class SubStepComponent implements AfterViewInit, OnInit {
  public name: string;
  public sub_steps: any[];
  public step: IStep;
  public story_id: number;
  current_user: any;

  constructor(private voteService: VoteService) {
  }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.checkVoted();
  }

  ngAfterViewInit() {
    (function($) {
      $('.accordion a').click(function(j) {
        const dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).closest('.accordion').find('a.active').removeClass('active');
          $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle(300);

        j.preventDefault();
      });
    })(jQuery);
  }

  onVote() {
    this.voteService.voteStep(this.story_id, this.step.id, this.current_user.token)
      .subscribe(response => this.onVoteSuccess(response),
      response => this.onVoteError(response));
  }

  onVoteSuccess(response) {
    if (response) {
      const total_vote = JSON.parse(response._body).data.total_vote;
      this.step.total_vote = total_vote;
      if ($('#heart_step').hasClass('voted')) {
        $('#heart_step').removeClass('voted');
      } else {
        $('#heart_step').addClass('voted');
      }
    }
  }

  onVoteError(response) {
    console.log(response);
  }

  checkVoted() {
    const user_voted = this.step.users_voted;
    if (user_voted.find(user => user.id === this.current_user.id)) {
      $('#heart_step').addClass('voted');
    } else {
      $('#heart_step').removeClass('voted');
    }
  }

  onFocusComment() {
    $('input')[1].focus();
  }
}
