import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../shared/story.model';
import { CommentService } from './comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    if (this.commentable_type === 'story') {
      this.commentService.postCommentStory(this.packageCommentForm.value, this.commentable_id,
        this.current_user.token).subscribe(response => this.onSuccess(response),
        response => this.onError(response));
    } else {
      this.commentService.postCommentStep(this.packageCommentForm.value, this.story_id ,
        this.commentable_id, this.current_user.token).subscribe(
        response => this.onSuccess(response), response => this.onError(response));
    }
  }

  onSuccess(response) {
    if (response) {
      const res = JSON.parse(response._body);
      const comment = res.data.comment;
      this.resetForm();
      this.comments.push(comment);
    }
  }

  onError(response) {

  }
}
