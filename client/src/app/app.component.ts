import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Ng2Cable, Broadcaster } from 'ng2-cable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private ng2cable: Ng2Cable,
    private broadcaster: Broadcaster, public toastr: ToastsManager, vcr: ViewContainerRef) {
    translate.addLangs(['en', 'jp']);
    translate.setDefaultLang('en');
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.ng2cable.subscribe('https://ng2-cable-example.herokuapp.com/cable', 'ChatChannel');
    this.broadcaster.on<string>('CreateMessage').subscribe(
      message => {
        const noti = <any>message;
        const mes = 'You have notify from ' + noti.sender;
        this.toastr.custom(mes);
      }
    );
  }
}
