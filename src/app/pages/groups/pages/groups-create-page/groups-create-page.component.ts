import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Computer } from '../../../../models/Computer';
import { Group } from '../../../../models/Group';
import { User } from '../../../../models/User';
import { Router } from '@angular/router';
import { GroupService } from '../../../../services/group.service';
import { UserService } from '../../../../services/user.service';
import { GroupsFormComponent } from '../../components/groups-form/groups-form.component';

@Component({
  selector: 'app-groups-create-page',
  templateUrl: './groups-create-page.component.html',
  styleUrls: ['./groups-create-page.component.scss'],
})
export class GroupsCreatePageComponent implements OnInit {
  public users: User[];

  form: FormGroup;
  group: Group;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: GroupService,
    private userService: UserService
  ) {
    this.userService.findAll().subscribe((result) => {
      this.users = result;
    });
  }

  public ngOnInit(): void {
    this.form = GroupsFormComponent.createForm(
      this.fb,
      new Group(0, '', new Array<Computer>())
    );
  }

  public saveGroup(values: any): void {
    this.service
      .insert(values)
      .subscribe(() => this.router.navigate(['/groups/list']));
  }
}
