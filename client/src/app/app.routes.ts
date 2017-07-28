import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoryDetailsComponent } from './story/storyindex/story-details/story-details.component';
import { StoryindexComponent } from './story/storyindex/storyindex.component';
import { CreateComponent } from './story/create/create.component';
import { LoggedInGuard } from './logged-in.guard';
import { UpdateUserComponent } from './updateuser/updateuser.component';
import { InfoUserComponent } from './info-user/info-user.component';

export const routing: Routes = [
  { path: 'story', component: StoryComponent, canActivate: [LoggedInGuard],
    children: [
      { path: '', component: StoryindexComponent },
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
