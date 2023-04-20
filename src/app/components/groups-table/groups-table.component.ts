import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.scss'],
})
export class GroupsTableComponent implements OnInit {
  service: UserService;

  @Input()
  public groups: Group[];

  @Output()
  public deleted: EventEmitter<Group> = new EventEmitter<Group>();

  @Output()
  public edited: EventEmitter<Group> = new EventEmitter<Group>();

  public constructor(service: UserService) {
    this.service = service;
  }

  public ngOnInit(): void {}
}
