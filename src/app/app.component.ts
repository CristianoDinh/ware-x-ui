import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserAuthComponent} from './components/user-auth/user-auth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ware-x-ui';
}
