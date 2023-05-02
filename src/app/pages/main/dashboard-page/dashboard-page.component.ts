import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/app/models/Report';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  public reports: Report[];

  public constructor(private service: ReportService, private router: Router) {}

  public ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.reports = result));
  }
}
