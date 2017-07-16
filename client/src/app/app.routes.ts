import { Routes, RouterModule } from '@angular/router';

export const routing: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
export const AppRoutes  = RouterModule.forRoot(routing);
