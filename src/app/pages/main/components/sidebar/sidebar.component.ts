import { Component } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import {SessionsService } from '../../../../services/sessions.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private AppComponent: AppComponent, private service: SessionsService) {}
  toggleTheme() {
    this.AppComponent.toggleTheme();
  }

  logout() : void {
    this.service.logout();
  }
}
