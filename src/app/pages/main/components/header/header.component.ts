import { Component } from '@angular/core';
import { SessionsService } from '../../../../services/sessions.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public constructor (private session: SessionsService){}

  public onLogout(): void {
    this.session.logout();
  }
}
