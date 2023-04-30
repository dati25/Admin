import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../../../../services/group.service';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../../models/Group';
import { User } from '../../../../models/User';
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
  ) {}

  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.findById(id).subscribe((group) => {
      this.group = group;
      this.form = GroupsFormComponent.createForm(this.fb, group);

      this.userService.findAll().subscribe((result) => {
        this.users = result.filter(
          (user) =>
            !this.group.pcGroups.some(
              (computer) => computer.idPc === user.id
            ) && user.status !== 'q'
        );
      });
    });
  }

  public saveGroup(values: any): void {
    if (this.group.pcGroups != null) {
      this.group.pcGroups.forEach((user) => {
        this.service.deleteUser(this.group, user).subscribe(() => {});
      });
    }

    Object.assign(this.group, values);
    this.service.update(this.group).subscribe(() => window.history.back());
  }
}
