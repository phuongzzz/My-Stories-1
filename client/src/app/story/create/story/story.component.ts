import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateStoryService } from './create_story.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './story.component.html',
  styleUrls: ['../create.component.scss'],
  providers: [CreateStoryService]
})
export class StoryFormComponent implements OnInit {
  private current_user: any;

  constructor(private createStoryService: CreateStoryService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    } else {
      location.href = '';
    }
  }

  autoExpand() {
    const textarea = document.getElementById('description');
    textarea.style.height = '72px';
    const contentHeight = document.getElementById('description').scrollHeight;
    textarea.style.height = contentHeight + 'px';
    window.scroll(0, contentHeight);
  }

  onNext(response) {
    if (response) {
      console.log(response._body);
      this.router.navigate(['./step'], { relativeTo: this.route });
    }
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

  onSubmit(value: any) {
    this.createStoryService.createStory(value, this.current_user.token).
      subscribe(response => this.onNext(response),
      response => this.onError(response));
  };

}
