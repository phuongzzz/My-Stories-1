import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  stories_by_category: any[];
  category_id: number;
  category_name: string;

  constructor(private _storyService: StoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.category_id = +this.route.snapshot.params['id'];

    this._storyService.getStoriesByCatetories(this.category_id).subscribe(
      (res) => {
        this.stories_by_category = res.stories;
        this.category_name = res.category;
      }
    );
  }
}
