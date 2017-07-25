import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storyindex',
  templateUrl: './storyindex.component.html',
  styleUrls: ['./storyindex.component.css']
})
export class StoryindexComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['./create'], {relativeTo: this.route});
  }
}
