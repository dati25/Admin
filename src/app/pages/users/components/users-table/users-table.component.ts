import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  @Input()
  public users: User[];

  @Output()
  public deleted: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  public edited: EventEmitter<User> = new EventEmitter<User>();

  public constructor() {}

  public ngOnInit(): void {}
}
