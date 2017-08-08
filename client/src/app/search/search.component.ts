import {Component, Input, OnInit} from '@angular/core';
import { SearchService} from './search.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ SearchService ]
})

export class SearchComponent implements OnInit {
  private search_value: any;
  public search_story: any[];
  private search_step: any[];
  public search_value_barnav: any;
  public l1 = [1,2,3,4];

  private story_value: any;
  public story_info: any[];

  constructor( public searchService: SearchService) {
    if (localStorage.getItem('valueSearch')){
      this.search_value_barnav = JSON.parse(localStorage.getItem('valueSearch'));
      this.onSubmitBar(this.search_value_barnav.search.email);
      localStorage.removeItem('valueSearch');
    }
  }

  ngOnInit() {
  }

  onSubmit(values: any) {
    console.log(window.location.href);
    this.searchService.search(values.search.email).subscribe(
      response => this.onNext(response),
      response => this.onError(response));
  }

  onSubmitBar(values: any){
    this.searchService.search(values).subscribe(
      response => this.onNext(response),
      response => this.onError(response));
  }

  onNext(response){
    if (response.status === 200) {
      this.story_info = [];
      this.search_value = JSON.parse(response._body);
      this.search_story = this.search_value.data.stories;
      for( let story of this.search_story){
        console.log(story._id);
        this.searchService.getStep(story._id).subscribe(
          responses => this.onNextStoryInfo(responses)
        )
      }
      this.search_step = this.search_value.data.steps;
      console.log(this.search_step);
    }
  }

  onError(response){
    console.log('dm')
  }

  getStoryStep(values: any){
    this.searchService.getStep(values).subscribe(
      response => this.onNextStoryInfo(response)
    )
  }

  onNextStoryInfo(response){
    if (response.status === 200) {
      this.story_value = JSON.parse(response._body);
      const tmp = this.story_value.data.story;
      this.story_info.push(tmp);
      console.log(tmp.steps+ ' hihi');
    }
  }

}
