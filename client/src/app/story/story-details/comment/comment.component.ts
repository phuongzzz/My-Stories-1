import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../shared/story.model';
import { CommentService } from './comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  current_user: any;
  commentForm: FormGroup;
  packageCommentForm: FormGroup;
  @Input() comments: IComment[];
  @Input() commentable_id: number;
  @Input() story_id: number;
  @Input() commentable_type: string;

  constructor(private commentService: CommentService,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
  }

  createForm() {
    this.packageCommentForm = this.formbuilder.group({
      comment: this.commentForm = this.formbuilder.group({
        content: ['', Validators.required]
      })
    });
  }

  resetForm() {
    this.commentForm.controls['content'].setValue('');
  }

  onSubmit() {
    const now = new Date();
    const comment = {
      commentable_id: this.commentable_id,
      commentable_type: this.commentable_type,
      content: this.commentForm.controls['content'].value,
      created_at: now.toString(),
      user_name: this.current_user.name,
    };
    this.sendComment(comment, this.packageCommentForm);
    this.comments.push(comment);
    this.resetForm();
  }

  onSuccess(response, cmt: IComment) {
    if (response) {
      const res = JSON.parse(response._body);
      const comment = <IComment>res.data.comment;
      cmt.id = comment.id;
    }
  }

  sendComment(cmt, form) {
    if (this.commentable_type === 'story') {
      this.commentService.postCommentStory(form.value, this.commentable_id,
        this.current_user.token).subscribe(response => this.onSuccess(response, cmt),
        response => this.onError(response, cmt));
    } else {
      this.commentService.postCommentStep(form.value, this.story_id ,
        this.commentable_id, this.current_user.token).subscribe(
        response => this.onSuccess(response, cmt), response => this.onError(response, cmt));
    }
  }

  onError(response, cmt) {
    if (response) {
      const cmt_div = '#cmt_' + (this.comments.length - 1);
      const user = '#user_' + (this.comments.length - 1);
      const resendbtn = '#resend_' + (this.comments.length - 1);
      $(cmt_div).addClass('unsendable');
      $(user).addClass('unsendable');
      $(resendbtn).fadeIn();
    }
  }

  resend(cmt_id: number) {
    const cmt = this.comments[cmt_id];
    const resendForm = this.formbuilder.group({
      comment: this.formbuilder.group({
        content: cmt.content
      })
    });
    this.sendComment(cmt, resendForm);
    const cmt_div = '#cmt_' + cmt_id;
    const user = '#user_' + cmt_id;
    const resendbtn = '#resend_' + cmt_id;
    $(cmt_div).removeClass('unsendable');
    $(user).removeClass('unsendable');
    $(resendbtn).fadeOut();
  }
}
