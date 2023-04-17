import { Component } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/Group';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent {
    public groupData: Group[] = [];

    public constructor(private service: GroupService) {}

    public ngOnInit(): void {
        this.service.findAll().subscribe((result) => (this.groupData = result));
    }
}
