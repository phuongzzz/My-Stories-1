import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

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
  }
}
