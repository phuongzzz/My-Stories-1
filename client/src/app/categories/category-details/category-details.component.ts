import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
})
export class CategoryDetailsComponent implements OnInit {
  category: any;

  constructor() { }

  ngOnInit() {

  }

}
