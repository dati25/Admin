import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Admin';
  isDarkMode = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
  }
}
