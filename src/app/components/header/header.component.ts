import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    title = 'admin';

    constructor(private authService: AuthService, private router: Router) {}

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
