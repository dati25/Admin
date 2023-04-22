import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.scss'],
})
export class GroupsTableComponent implements OnInit {
  @Input()
  public groups: Group[];

  @Output()
  public deleted: EventEmitter<Group> = new EventEmitter<Group>();

  @Output()
  public edited: EventEmitter<Group> = new EventEmitter<Group>();

  public constructor() {}

  public ngOnInit(): void {}
}
