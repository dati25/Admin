import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../../../../services/group.service';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../models/Group';
import { User } from '../../../../models/User';
import { Computer } from '../../../../models/Computer';
import { GroupsFormComponent } from '../../components/groups-form/groups-form.component';

@Component({
  selector: 'app-groups-edit-page',
  templateUrl: './groups-edit-page.component.html',
  styleUrls: ['./groups-edit-page.component.scss'],
})
export class GroupsEditPageComponent implements OnInit {
  public users: User[];

  form: FormGroup;
  group: Group;

  public constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: GroupService,
    private userService: UserService
  ) {
    this.userService.findAll().subscribe((result) => {
      this.users = result;
    });
  }

  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.findById(id).subscribe((group) => {
      this.group = group;
      this.form = GroupsFormComponent.createForm(this.fb, group);
    });
  }

  public saveGroup(values: any): void {
    Object.assign(this.group, values);

    const updatedGroup = { ...this.group };
    delete updatedGroup.pcGroups;

    this.service.update(updatedGroup).subscribe(() => window.history.back());
  }

  public removeUser(computer: Computer): void {
    this.service.deleteUser(this.group, computer).subscribe(() => {
      this.refresh();
    });
  }

  public addUser(): void {}

  private refresh(): void {
    this.service.findById(this.group.id).subscribe((result) => {
      this.group = result;
    });
  }
}
