import { Component, OnInit } from '@angular/core';
import { IStep } from '../shared/story.model';
import * as $ from 'jquery';
import { VoteService } from './vote.service';
import { IMG_URL } from '../../constants';
import { MdSnackBar } from '@angular/material';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss'],
  providers: [VoteService, MdSnackBar]
})

export class SubStepComponent implements OnInit {
  public name: string;
  public step: IStep;
  public story_id: number;
  public user_id: number;
  current_user: any;
  height: number;
  image_url = IMG_URL;

  constructor(private voteService: VoteService, private snackBar: MdSnackBar,
    private translate: TranslateService) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.checkVoted();
    this.height = window.innerHeight * 0.82;
  }

  onVote() {
    this.voteService.voteStep(this.story_id, this.step.id, this.current_user.token)
      .subscribe(response => this.onVoteSuccess(response),
      response => this.onVoteError(response));
  }

  onVoteSuccess(response) {
    if (response) {
      const total_vote = JSON.parse(response._body).data.total_vote;
      this.step.users_voted = total_vote.user_voted;
      this.step.total_vote = total_vote.total_vote;
      if ($('#heart_step').hasClass('voted')) {
        $('#heart_step').removeClass('voted');
      } else {
        $('#heart_step').addClass('voted');
      }
    }
  }

  onVoteError(response) {
    if (response) {
      this.snackBar.open(this.translate.instant('step.votederror') , '', {
        duration: 5000
      });
    }
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
    $('input').focus();
  }

  onFocusSubStep(id: number) {
    const substep = '#substep' + id;
    const presentHeight = $('.content').scrollTop() + $(substep).offset().top;
    $('.content').animate({
      scrollTop: presentHeight
    }, 800);
  }

  dropdownMenuToggle(e) {
    e.preventDefault();
    $('#menu').slideToggle(400);
  }

  onchange(sub_position: number, sub_id: number) {
    this.voteService.checkToggle(this.story_id, this.step.id, sub_id,
      this.current_user.token).subscribe(response => this.onCheckSuccess(response),
      response => this.onCheckError(response, sub_position));
  }

  onCheckSuccess(response) {
    if (response.ok === true) {
      this.snackBar.open(this.translate.instant('step.checkedsuccess') , '', {
        duration: 5000
      });
    }
  }

  onCheckError(response, sub_step) {
    if (response.ok === false) {
      const is_completed = this.step.sub_steps[sub_step].is_completed;
      this.step.sub_steps[sub_step].is_completed = !is_completed;
      this.snackBar.open(this.translate.instant('step.checkederror') , '', {
        duration: 5000
      });
    }
  }

  disableCheck() {
    return !this.current_user || this.current_user.id !== this.user_id;
  }
}
