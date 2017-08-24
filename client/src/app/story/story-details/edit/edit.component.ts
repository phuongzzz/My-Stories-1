import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IStory } from '../../shared/story.model';
import * as $ from 'jquery';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMG_URL } from '../../../constants';
import { EditStoryService } from './edit.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [FormBuilder, EditStoryService, MdSnackBar]
})
export class EditStoryComponent implements OnInit, AfterViewInit {
  url_image_story = '../../../../assets/picture/default.png';
  private current_user: any;
  public story: IStory;
  StoryForm: FormGroup;
  PackageStoryForm: FormGroup;
  StepForm: FormArray;
  image_url = IMG_URL;
  step_temp: number;
  substep_temp: number;

  constructor(private formbuilder: FormBuilder, private service: EditStoryService,
    private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
  }

  ngAfterViewInit() {
    for (let textarea of $('textarea')) {
      this.autoExpand(textarea.id);
    }
  }
  
  createForm() {
    this.PackageStoryForm = this.formbuilder.group({
      story: this.StoryForm = this.formbuilder.group({
        name: [this.story.name, Validators.required],
        description: [this.story.description, Validators.required],
        picture: this.story.picture,
        step: this.formbuilder.array([])
      })
    });
    this.StepForm = <FormArray>this.StoryForm.controls['step'];
    this.createStepForm();
  }

  initStepForms(id: number, name: string, content: string) {
    return this.formbuilder.group({
      name: [name, Validators.required],
      content: [content, Validators.required],
      id: [id, Validators.required],
      sub_steps_attributes: this.formbuilder.array([])
    });
  }

  getStepForm(i: number): FormArray {
    const step = <FormGroup> this.StepForm.controls[i];
    return <FormArray>step.controls['sub_steps_attributes'];
  }

  initSubStepForm(id: number, name: string, content: string, picture: string) {
    return this.formbuilder.group({
      name: [name, Validators.required],
      content: [content, Validators.required],
      id: [id, Validators.required],
      picture: picture
    })
  }

  getsrcImage(image: string, step: number, sub: number): string {
    var picture;
    if (image === 'story') {
      picture = this.story.picture;
    } else {
      picture = this.story.steps[step].sub_steps[sub].picture;
    }
    if (picture) {
      return this.image_url + picture;
    }
    return this.url_image_story;
  }

  createStepForm() {
    for (let step of this.story.steps) {
      const step_tmp = this.initStepForms(step.id, step.name, step.content);
      const subform = <FormArray>step_tmp.controls['sub_steps_attributes'];
      for (let sub_step of step.sub_steps) {
        subform.push(this.initSubStepForm(sub_step.id ,sub_step.name,
          sub_step.content, sub_step.picture));
      }
      this.StepForm.push(step_tmp);
    }
  }

  show(i: number) {
    const panel = $('.panel')[i];
    panel.toggleClass("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  onClick() {
    this.service.editStory(this.story.id, this.PackageStoryForm.value,
      this.current_user.token).subscribe(response => this.onEditSuccess(response),
      response => this.onEditError(response));
  }

  onEditSuccess(response) {
    window.location.reload();
  }

  onEditError(response) {
    this.snackBar.open('Edit Error!, Please try again!', '', {
      duration: 5000
    });
  }

  chooseImage(id: string) {
    $(id).trigger('click');
  }

  onChange(e, step:number, substep: number) {
    if (e.target.files && e.target.files[0]) {
      this.step_temp = step;
      this.substep_temp = substep;
      const reader = new FileReader();
      reader.onload = this.changeImage.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  changeImage(e) {
    const image = <FileReader> e.target;
    if (this.step_temp !== -1) {
      const pic = '#picture' + this.step_temp + '_' + this.substep_temp;
      $(pic).attr('src', image.result);
      const sub_step = <FormGroup>this.getStepForm(this.step_temp).controls[this.substep_temp];
      sub_step.controls['picture'].setValue(image.result);
    } else {
      $('#story_cover').attr('src', image.result);
      this.StoryForm.controls['picture'].setValue(image.result);
    }
  }

  autoExpand(id: string) {
    const textarea = document.getElementById(id);
    textarea.style.height = '60px';
    const contentHeight = document.getElementById(id).scrollHeight;
    textarea.style.height = contentHeight + 'px';
  }
}
