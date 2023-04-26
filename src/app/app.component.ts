import { Component, Renderer2 } from '@angular/core';
import {SessionsService} from "./services/sessions.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Admin';
  isDarkMode = true;

  constructor(private renderer: Renderer2, private router: Router,
    private session: SessionsService) {}

    
    public logout(): void {
      this.session.logout();
      this.router.navigate([ '/login' ]);
    }
    
    public authenticated(): boolean {
      return this.session.authenticated();
    }
    
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
    }
  }

