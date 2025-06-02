import { Routes } from '@angular/router';
import {UserAuthComponent} from './components/user-auth/user-auth.component';
import {HomeComponent} from './components/home/home.component';
import {ComingSoonComponent} from './components/coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    component: UserAuthComponent,
    title: 'Account'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'HomePage'
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
    title: ''
  },
  { path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

];
