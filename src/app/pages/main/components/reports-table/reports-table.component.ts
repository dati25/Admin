import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Report } from '../../../../models/Report';
import { User } from '../../../../models/User';
import { Config } from '../../../../models/Config';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.scss'],
})
export class ReportsTableComponent {
  @Input()
  public reports: Report[];

  @Input()
  public users: User[];

  @Input()
  public configs: Config[];

  @Output()
  public deleted: EventEmitter<Report> = new EventEmitter<Report>();

  @Output()
  public edited: EventEmitter<Report> = new EventEmitter<Report>();

  public constructor() {}

  public ngOnInit(): void {}
}
