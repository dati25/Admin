import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Config } from '../../../../models/Config';
import { DatePipe } from '@angular/common';
import cronstrue from 'cronstrue';

@Component({
  selector: 'app-configs-table',
  templateUrl: './configs-table.component.html',
  styleUrls: ['./configs-table.component.scss'],
})
export class ConfigsTableComponent implements OnInit {
  public datePipe: DatePipe;

  @Input()
  public configs: Config[];

  @Output()
  public deleted: EventEmitter<Config> = new EventEmitter<Config>();

  @Output()
  public edited: EventEmitter<Config> = new EventEmitter<Config>();

  public constructor() {}

  public ngOnInit(): void {}

  public getCron(cron: string): string {
    return cronstrue.toString(cron, { use24HourTimeFormat: true });
  }
}
