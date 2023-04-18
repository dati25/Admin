import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
})
export class UsersListPageComponent implements OnInit {
  public users: User[];

  public constructor(private service: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.refresh();
  }

  public editUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  public deleteUser(user: User): void {
    this.service.delete(user).subscribe(() => {
      this.refresh();
    });
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.users = result));
  }
}
