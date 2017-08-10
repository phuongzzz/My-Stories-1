import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoriesListComponent } from './story/stories-list.component';
import { StoryDetailsComponent } from './story/story-details/story-details.component';
import { StoriesListResolverService } from './story/shared/stories-list-resolver.service';
import { CreateComponent } from './story/create/create.component';
import { LoggedInGuard } from './logged-in.guard';
import { NotLoggedInGuard } from './not-logged-in.guard';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { SearchComponent } from './search/search.component';
import { StoryResolverService } from './story/shared/story-resolver.service';

export const routing: Routes = [
  { path: 'story', component: StoryComponent, canActivate: [LoggedInGuard],
    children: [
      { path: 'list', component: StoriesListComponent,
        resolve: {stories: StoriesListResolverService}},
      { path: 'create', component: CreateComponent },
      { path: ':id', component: StoryDetailsComponent,
        resolve: {story: StoryResolverService}
      }
    ]
  },
  { path: 'category', component: CategoriesComponent,
    children: [
      { path: ':id', component: CategoryDetailsComponent }
    ]
  },
  { path: 'user', component: InfoUserComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'user', component: InfoUserComponent,
  },
  { path: 'user/:id', component: InfoUserComponent,
  },
  {
    path: '', component: InfoUserComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: 'signin', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  }

];
export const AppRoutes  = RouterModule.forRoot(routing);
export const URL = 'http://localhost:3000/';
export const IMG_URL = 'http://res.cloudinary.com/my-stories/';
