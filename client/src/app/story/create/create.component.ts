import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CreateStoryService } from './create_story.service';
import { Step } from './data-model';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ FormBuilder, CreateStoryService ]
})
export class CreateComponent implements OnInit {
  private current_user: any;
  StoryForm: FormGroup;
  hidden = true;
  private presentStep = -1;
  constructor(private formbuilder: FormBuilder, private router: Router,
    private createService: CreateStoryService) {
  }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
    $('#story').addClass('animated fadeInLeft');
    setInterval(function(){
      $('#story').removeClass('animated fadeInLeft');
    }, 1000);
  }

  createForm() {
    this.StoryForm = this.formbuilder.group({
      name: '',
      due_date: '',
      is_public: 'true',
      description: '',
      step_forms: this.formbuilder.array([
        this.initStepForms()
      ])
    });
  }

  initStepForms() {
    return this.formbuilder.group(new Step());
  }

  createStep() {
    $('#story').slideUp('slow', function() {
      $('#step').fadeIn('slow');
    });
    this.presentStep += 1;
    this.hidden = false;
  }

  newStep() {
    const step = '#step' + this.presentStep;
    $(step).addClass('animated fadeOutLeft');
    $(step).slideUp('slow');
    const control = <FormArray>this.StoryForm.controls['step_forms'];
    control.push(this.initStepForms());
    this.presentStep = control.length -1;
    setInterval(function(){
      $(step).removeClass('animated fadeOutLeft');
    }, 1000);
  }

  next() {
    console.log(this.presentStep);
    if (this.presentStep === -1) {
      this.createStep();
      return ;
    }
    const step = '#step' + this.presentStep;
    this.presentStep += 1;
    const step_next = '#step' + this.presentStep;
    $(step_next).fadeIn();
    $(step).addClass('animated fadeOutLeft');
    $(step).slideUp('slow');
    setInterval(function(){
      $(step).removeClass('animated fadeOutLeft');
    }, 1000);
  }

  back() {
    if (this.presentStep > 0) {
      const step = '#step' + this.presentStep;
      $(step).addClass('animated fadeOutDown');
      $(step).fadeOut();
      $(step).removeClass('animated fadeOutDown');
      setInterval(function(){
        $(step).removeClass('animated fadeOutDown');
      }, 1000);
      this.presentStep -= 1;
      const step_back = '#step' + this.presentStep;
      $(step_back).fadeIn();
      $(step_back).addClass('animated fadeInLeft');
      setInterval(function(){
        $(step_back).removeClass('animated fadeInRight');
      }, 1000);
      return;
    }
    $('#story').slideDown('slow', function() {
      $('#step').fadeOut();
    });
    this.presentStep -= 1;
  }

  autoExpand(id: string) {
    const textarea = document.getElementById(id);
    textarea.style.height = '72px';
    const contentHeight = document.getElementById(id).scrollHeight;
    textarea.style.height = contentHeight + 'px';
    window.scroll(0, contentHeight);
  }

  submit() {
    console.log(this.presentStep);
    this.createService.createStory(this.StoryForm.value,
      this.current_user.token).subscribe(response => this.onSuccess(response),
      response => this.onError(response));
  }

  onSuccess(response) {
    console.log(response);
  }

  onError(response) {
    if (response.status === 401) {
      if (localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
      }
      this.current_user = {};
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
  }
}
