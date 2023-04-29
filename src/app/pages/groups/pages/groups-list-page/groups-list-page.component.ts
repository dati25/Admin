import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../../../../services/group.service';
import { Group } from '../../../../models/Group';

@Component({
  selector: 'app-groups-list-page',
  templateUrl: './groups-list-page.component.html',
  styleUrls: ['./groups-list-page.component.scss'],
})
export class GroupsListPageComponent implements OnInit {
  public groups: Group[];

  public constructor(private service: GroupService, private router: Router) {}

  public ngOnInit(): void {
    this.refresh();
  }

  public editGroup(group: Group): void {
    this.router.navigate(['/groups/edit', group.id]);
  }

  public deleteGroup(group: Group): void {
    this.service.delete(group).subscribe(() => {
      this.refresh();
    });
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.groups = result));
  }
}
