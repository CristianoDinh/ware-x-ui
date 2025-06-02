import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      // Giả sử login thành công
      this.router.navigate(['/home']); // Đổi thành route component homepage của bạn
    } else {
      // Giả sử đăng ký xong sẽ quay lại trang login
      this.isLogin = true;
    }
  }
}
