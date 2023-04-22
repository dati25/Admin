import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../models/Group';
import { User } from '../../models/User';
import { GroupService } from '../../services/group.service';
import { Computer } from '../../models/Computer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-groups-users',
  templateUrl: './groups-users.component.html',
  styleUrls: ['./groups-users.component.scss'],
})
export class GroupsUsersComponent {
  constructor(
    private service: GroupService,
    private userService: UserService
  ) {}

  @Input()
  users: User[];

  @Input()
  group: Group;

  public removeUser(computer: Computer): void {
    this.service.deleteUser(this.group, computer).subscribe(() => {
      this.refresh();
    });
  }

  public addUser(select: HTMLSelectElement): void {
    const userId = select.value;

    this.userService.findById(parseInt(userId)).subscribe((user) => {
      const updatedGroup = {
        ...this.group,
      };

      updatedGroup.pcGroups = [];
      updatedGroup.pcGroups.push(new Computer(user.id, user.name));
      delete updatedGroup.pcGroups[0].name;

      console.log(updatedGroup);

      this.service.update(updatedGroup).subscribe(() => {
        this.refresh();
      });
    });
  }

  private refresh(): void {
    this.service.findById(this.group.id).subscribe((result) => {
      this.group = result;
    });
  }
}
