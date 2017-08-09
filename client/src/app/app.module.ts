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
import { MdDialogModule,
  MdCardModule,
  MdInputModule,
  MdTooltipModule,
  MdMenuModule,
  MdSelectModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdTabsModule,
  MdAutocompleteModule,
  MdListModule,
} from '@angular/material';
import { LoggedInGuard } from './logged-in.guard';
import { NotLoggedInGuard } from './not-logged-in.guard';
import 'hammerjs';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { UpdateUserNameComponent } from './updateuser/update-user-name/update-user-name.component'
import { UpdateUserPasswordComponent } from './updateuser/update-user-password/update-user-password.component'
import { InfoUserComponent } from './info-user/info-user.component';
import { EditUserDialogComponent } from './info-user/user-dialog.component';
import { MdSnackBarModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MdToolbarModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { CategoryComponent } from './home/category/category.component';
import { MdGridListModule } from '@angular/material';
import { NewStoriesComponent } from './home/new-stories/new-stories.component';
import { HotStoriesComponent } from './home/hot-stories/hot-stories.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { MdSidenavModule } from '@angular/material';
import { CommentComponent } from './story/story-details/comment/comment.component';
import { CollapsibleWellComponent } from './story/story-details/collapsible-well.component';
import {
  StoriesListComponent,
  StoryThumbnailComponent,
  StoryDetailsComponent,
  StoryService,
  StoriesListResolverService,
  StepListComponent,
  UpvoteComponent,
  VoteService,
  SubStepComponent
} from './story/index';
import { SearchComponent } from './search/search.component';
import { StoryResolverService } from './story/shared/story-resolver.service';

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
    UpvoteComponent,
    SubStepComponent,
    StoryThumbnailComponent,
    HomeComponent,
    CategoryComponent,
    NewStoriesComponent,
    HotStoriesComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    SearchComponent,
    CommentComponent
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
    MdSnackBarModule,
    MdChipsModule,
    MdToolbarModule,
    MdChipsModule,
    MdGridListModule,
    MdMenuModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdAutocompleteModule,
    MdSidenavModule,
    MdTabsModule,
    MdTabsModule,
    MdListModule,
    MdSidenavModule
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    InfoUserComponent,
    UpdateUserNameComponent,
    UpdateUserPasswordComponent,
    EditUserDialogComponent,
    SubStepComponent,
  ],
  providers: [
    LoggedInGuard,
    NotLoggedInGuard,
    StoryService,
    StoriesListResolverService,
    VoteService,
    StoryResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
