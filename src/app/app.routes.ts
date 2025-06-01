import { Routes } from '@angular/router';
import {UserAuthComponent} from './components/user-auth/user-auth.component';

export const routes: Routes = [
  {
    path: 'account',
    component: UserAuthComponent,
    title: 'Account'
  }
];
