import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'jp']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    $('.phuong-btn').addClass('animated bounceInUp');
  }
}
