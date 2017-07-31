import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routes';
import { I18nModule } from './app.i18n';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { CreateComponent } from './story/create/create.component';
import { MdDialogModule, MdCardModule, MdInputModule, MdTooltipModule } from '@angular/material';
import { LoggedInGuard } from './logged-in.guard';
import 'hammerjs';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { UpdateUserNameComponent } from './updateuser/update-user-name/update-user-name.component'
import { UpdateUserPasswordComponent } from './updateuser/update-user-password/update-user-password.component'
import { InfoUserComponent } from './info-user/info-user.component';
import { EditUserDialogComponent } from './info-user/user-dialog.component';
import { MdSnackBarModule } from '@angular/material';

import { CollapsibleWellComponent } from './story/story-details/collapsible-well.component';
import {
  StoriesListComponent,
  StoryThumbnailComponent,
  StoryDetailsComponent,
  StoryService,
  StoriesListResolverService,
  StepListComponent,
  UpvoteComponent,
  VoteService
} from './story/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    StoryComponent,
    CreateComponent,
    UpdateUserComponent,
    UpdateUserNameComponent,
    InfoUserComponent,
    UpdateUserPasswordComponent,
    EditUserDialogComponent,
    StoriesListComponent,
    StoryThumbnailComponent,
    StoryDetailsComponent,
    StepListComponent,
    CollapsibleWellComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes,
    I18nModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule,
    MdSnackBarModule
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    InfoUserComponent,
    UpdateUserNameComponent,
    UpdateUserPasswordComponent,
    EditUserDialogComponent,
  ],
  providers: [
    LoggedInGuard,
    StoryService,
    StoriesListResolverService,
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
