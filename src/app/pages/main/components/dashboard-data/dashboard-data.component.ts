import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Report } from '../../../../models/Report';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss'],
})
export class DashboardDataComponent implements OnInit {
  @Input()
  public reports: Report[];

  @Output()
  public deleted: EventEmitter<Report> = new EventEmitter<Report>();

  @Output()
  public edited: EventEmitter<Report> = new EventEmitter<Report>();

  public constructor() {}

  public ngOnInit(): void {}
}
