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
import { StoryService } from './story/shared/story.service';
import { StoryDetailsComponent } from './story/storyindex/story-details/story-details.component';
import { StoriesListComponent } from './story/storyindex/stories-list/stories-list.component';
import { StoryRowComponent } from './story/storyindex/story-row/story-row.component';
import { CreateComponent } from './story/create/create.component';
import { StoryindexComponent } from './story/storyindex/storyindex.component';
import { MdDialogModule, MdCardModule, MdInputModule, MdTooltipModule } from '@angular/material';
import { LoggedInGuard } from './logged-in.guard';
import 'hammerjs';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { UpdateUserNameComponent } from './updateuser/update-user-name/update-user-name.component'
import { InfoUserComponent } from './info-user/info-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    StoryComponent,
    CreateComponent,
    StoryindexComponent,
    StoriesListComponent,
    StoryRowComponent,
    UpdateUserComponent,
    UpdateUserNameComponent,
    InfoUserComponent,
    StoryDetailsComponent
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
    MdTooltipModule
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    InfoUserComponent,
    UpdateUserNameComponent
  ],
  providers: [LoggedInGuard, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
