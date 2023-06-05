import { Component } from '@angular/core';
import { SessionsService } from '../../../../services/sessions.service';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public username: string = localStorage.getItem('username');

  public constructor(
    private session: SessionsService,
    private appcomp: AppComponent
  ) {}

  public onLogout(): void {
    this.session.logout();
  }

  public changeTheme(): void {
    this.appcomp.toggleTheme();
  }
}
