import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requests-list-page',
  templateUrl: './requests-list-page.component.html',
  styleUrls: ['./requests-list-page.component.scss'],
})
export class RequestsListPageComponent {
  public requests: User[];

  public constructor(private router: Router, private service: UserService) {}

  public ngOnInit(): void {
    this.refresh();
  }

  public editUser(computer: User): void {
    this.router.navigate(['requests/edit', computer.id]);
  }

  public deleteUser(computer: User): void {
    this.service.delete(computer).subscribe(() => this.refresh());
  }

  public approveUser(computer: User): void {
    computer.status = 'f';
    this.service.update(computer).subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => {
      this.requests = result.filter((x) => x.status === 'q');
    });
  }
}
