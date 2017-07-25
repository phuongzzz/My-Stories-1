import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { StoryindexComponent } from './story/storyindex/storyindex.component';
import { CreateComponent } from './story/create/create.component';

export const routing: Routes = [
  { path: 'story', component: StoryComponent,
    children: [
      { path: '', component: StoryindexComponent },
      { path: 'create', component: CreateComponent }
    ]
  }
];
export const AppRoutes  = RouterModule.forRoot(routing);
export const URL = 'http://localhost:3000/';
