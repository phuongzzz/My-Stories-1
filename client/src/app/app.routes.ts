import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoriesListComponent } from './story/stories-list.component';
import { StoryDetailsComponent } from './story/story-details/story-details.component';
import { StoriesListResolverService } from './story/shared/stories-list-resolver.service';
import { CreateComponent } from './story/create/create.component';
import { LoggedInGuard } from './logged-in.guard';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { InfoUserComponent } from './info-user/info-user.component';

export const routing: Routes = [
  { path: 'story', component: StoryComponent, canActivate: [LoggedInGuard],
    children: [
      { path: 'list', component: StoriesListComponent,
        resolve: {stories: StoriesListResolverService}},
      { path: 'create', component: CreateComponent },
      { path: ':id', component: StoryDetailsComponent }
    ]
  },
  { path: 'user/edit', component: UpdateUserComponent,
    canActivate: [LoggedInGuard],
  },
];
export const AppRoutes  = RouterModule.forRoot(routing);
export const URL = 'http://localhost:3000/';
