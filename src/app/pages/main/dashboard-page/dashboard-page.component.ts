import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/app/models/Report';
import { User } from 'src/app/models/User';
import { Config } from 'src/app/models/Config';
import { UserService } from 'src/app/services/user.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  public reports: Report[];
  public users: User[];
  public configs: Config[];

  public constructor(
    private service: ReportService,
    private userService: UserService,
    private configService: ConfigService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.reports = result));
    this.userService.findAll().subscribe((result) => (this.users = result));
    this.configService.findAll().subscribe((result) => (this.configs = result));
  }
}
