import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-tutorial';

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
    this.navigateToLogin();
  }
  navigateToLogin() {
    this.router.navigateByUrl('/');
  }
}

