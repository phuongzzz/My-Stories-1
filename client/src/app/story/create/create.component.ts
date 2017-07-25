import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CreateStoryService } from './create_story.service';
import { Step } from './data-model';
import { Router } from '@angular/router';

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
  constructor(private formbuilder: FormBuilder, private router: Router,
    private createService: CreateStoryService) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.current_user = JSON.parse(localStorage.getItem('currentUser'));
      this.createForm();
    } else {
      location.href = '';
    }
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
    this.hidden = false;
  }

  newStep() {
    const control = <FormArray>this.StoryForm.controls['step_forms'];
    control.push(this.initStepForms());
  }

  autoExpand(id: string) {
    const textarea = document.getElementById(id);
    textarea.style.height = '72px';
    const contentHeight = document.getElementById(id).scrollHeight;
    textarea.style.height = contentHeight + 'px';
    window.scroll(0, contentHeight);
  }

  submit() {
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
