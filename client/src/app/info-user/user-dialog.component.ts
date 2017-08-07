import { Component, OnInit } from '@angular/core';
import {MdTooltipModule} from '@angular/material';
import { InfoUserComponent } from './info-user.component';

@Component({
  selector: 'app-edit-user-dialog',
  template:
    `
    <app-info-user></app-info-user>
    <div class="pull-right" mdTooltip="Edit your profile">
      <button md-mini-fab routerLink="/user/edit" md-dialog-close>
        <i class="material-icons">edit</i>
      </button>
    </div>
    `,
  providers: [InfoUserComponent, MdTooltipModule]
})

export class EditUserDialogComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
