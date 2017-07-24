import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StoryComponent } from './story/story.component';
import { CreateComponent } from './story/create/create.component';
import { StoryFormComponent } from './story/create/story/story.component';


export const routing: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'story', component: StoryComponent,
    children: [
      { path: 'create', component: CreateComponent,
        children: [
          { path: '', component: StoryFormComponent }
        ]
      }
    ]
  }
];
export const AppRoutes  = RouterModule.forRoot(routing);
export const URL = 'http://localhost:3000/';
