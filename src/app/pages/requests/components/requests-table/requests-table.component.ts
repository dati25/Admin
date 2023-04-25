import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.scss'],
})
export class RequestsTableComponent implements OnInit {
  @Input()
  public requests: User[];

  @Output()
  public edited: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  public deleted: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  public approved: EventEmitter<User> = new EventEmitter<User>();

  public constructor() {}

  public ngOnInit(): void {}
}
