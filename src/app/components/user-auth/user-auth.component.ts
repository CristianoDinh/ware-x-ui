import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-auth',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  isLogin: boolean = true;

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
}
