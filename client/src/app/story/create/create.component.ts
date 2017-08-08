import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateStoryService } from './create_story.service';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { MdSnackBar } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormBuilder, CreateStoryService, MdSnackBar]
})
export class CreateComponent implements OnInit {
  url_image_story = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
  private current_user: any;
  StoryForm: FormGroup;
  PackageStoryForm: FormGroup;
  StepForm: FormArray;
  hidden = true;
  sub_temp: number;
  categories:  any[];

  private presentStep = -1;
  constructor(private formbuilder: FormBuilder, private router: Router,
    private createService: CreateStoryService, private snackBar: MdSnackBar,
    private translate: TranslateService, public createStoryService: CreateStoryService) {
  }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
    this.createStoryService.getCategory().
    subscribe(response => this.onSuccessCategory(response));
    $('#story').addClass('animated fadeInLeft');
    setInterval(function() {
      $('#story').removeClass('animated fadeInLeft');
    }, 1500);
  }

  onSuccessCategory(response) {
    this.categories = response.data.categories;
  }

  getStepForm(i: number): FormArray {
    const step = <FormGroup> this.StepForm.controls[i];
    return <FormArray>step.controls['sub_steps_attributes'];
  }

  createForm() {
    this.PackageStoryForm = this.formbuilder.group({
      story: this.StoryForm = this.formbuilder.group({
        name: ['', Validators.required],
        due_date: ['', Validators.required],
        is_public: 'true',
        category_id: ['', Validators.required],
        description: ['', Validators.required],
        picture: '',
        step: this.formbuilder.array([])
      })
    });
    this.StepForm = <FormArray>this.StoryForm.controls['step'];
  }

  initStepForms() {
    return this.formbuilder.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
      sub_steps_attributes: this.formbuilder.array([])
    });
  }

  initSubStepForm() {
    return this.formbuilder.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
      picture: ''
    })
  }

  createStep() {
    this.StepForm.push(this.initStepForms());
    this.presentStep = this.StepForm.length - 1;
    $('#story').slideUp('slow', function() {
      $('#step').fadeIn('slow');
    });
    this.hidden = false;
  }

  newSubStep() {
    const control = <FormArray> this.getStepForm(this.presentStep);
    control.push(this.initSubStepForm());
  }

  newStep() {
    window.scroll(0, 0);
    const step = '#step' + this.presentStep;
    $(step).addClass('animated fadeOutLeft');
    $(step).slideUp('slow');
    this.StepForm.push(this.initStepForms());
    this.presentStep = this.StepForm.length - 1;
    setInterval(function() {
      $(step).removeClass('animated fadeOutLeft');
    }, 1500);
  }

  next() {
    if (this.presentStep === -1) {
      $('#story').slideUp('slow', function() {
        $('#step').fadeIn('slow');
      });
      this.presentStep += 1;
      return;
    }
    const step = '#step' + this.presentStep;
    this.presentStep += 1;
    const step_next = '#step' + this.presentStep;
    $(step_next).fadeIn();
    $(step).addClass('animated fadeOutLeft');
    $(step).slideUp('slow');
    setInterval(function() {
      $(step).removeClass('animated fadeOutLeft');
    }, 1500);
  }

  back() {
    if (this.presentStep > 0) {
      const step = '#step' + this.presentStep;
      $(step).addClass('animated fadeOutDown');
      $(step).fadeOut();
      $(step).removeClass('animated fadeOutDown');
      setInterval(function() {
        $(step).removeClass('animated fadeOutDown');
      }, 1500);
      this.presentStep -= 1;
      const step_back = '#step' + this.presentStep;
      $(step_back).fadeIn();
      $(step_back).addClass('animated fadeInLeft');
      setInterval(function() {
        $(step_back).removeClass('animated fadeInLeft');
      }, 1500);
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
  }

  form_is_invalid(): boolean {
    if (this.StoryForm.dirty && this.StoryForm.valid) {
      return this.StoryForm.value.picture === '';
    }
    return true;
  }

  submit() {
    if (this.form_is_invalid()) {
      this.snackBar.open( this.translate.instant('story_form.blank_noti') , '', {
        duration: 5000
      });
      return;
    } else {
      this.createService.createStory(this.PackageStoryForm.value,
        this.current_user.token).subscribe(response => this.onSuccess(response),
        response => this.onError(response));
    }

  }

  onSuccess(response) {
    if (response) {
      const story = JSON.parse(response._body).data.story;
      this.router.navigate(['story', story.id]);
    }
  }

  onError(response) {
    if (response.status === 401) {
      if (localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
      }
      this.current_user = {};
      this.router.navigate(['']);
    }
  }

  chooseImage(id: string) {
    $(id).trigger('click');
  }

  onChange(e, id: number) {
    if (e.target.files && e.target.files[0]) {
      if (this.presentStep >= 0) {
        this.sub_temp = id;
      }
      const reader = new FileReader();
      reader.onload = this.changeImage.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  changeImage(e) {
    const image = <FileReader> e.target;
    if (this.presentStep === -1) {
      $('#story_cover').attr('src', image.result);
      this.StoryForm.controls['picture'].setValue(image.result);
    } else {
      const img = '#image' + this.presentStep + '_' + this.sub_temp;
      $(img).attr('src', image.result);
      const sub_step = <FormGroup>this.getStepForm(this.presentStep).controls[this.sub_temp];
      sub_step.controls['picture'].setValue(image.result);
    }
  }

  delSubStep(id: number) {
    const control = <FormArray> this.getStepForm(this.presentStep);
    const sub = '#substep' + this.presentStep + '_' + id;
    $(sub).fadeOut();
    control.removeAt(id);
  }

  delStep() {
    const step = '#step' + this.presentStep;
    this.StepForm.removeAt(this.presentStep);
    if (this.StepForm.length === 0) {
      this.presentStep = -1;
      this.hidden = true;
      $('#step').fadeOut();
      $('#story').slideDown('slow');
      return;
    }
    if (this.presentStep === this.StepForm.length) {
      this.presentStep -= 1;
      const step_back = '#step' + this.presentStep;
      $(step_back).fadeIn();
      $(step_back).addClass('animated fadeInLeft');
      setInterval(function() {
        $(step_back).removeClass('animated fadeInLeft');
      }, 1500);
      return;
    }
    const step_next = '#step' + (this.presentStep + 1);
    $(step_next).fadeIn();
    $(step_next).addClass('animated fadeInRight');
    setInterval(function() {
      $(step).removeClass('animated fadeOutRight');
    }, 1500);
  }
}
