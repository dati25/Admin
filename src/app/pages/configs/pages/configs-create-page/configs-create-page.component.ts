import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Source } from 'src/app/models/Source';
import { Destination } from 'src/app/models/Destination';
import { Task } from 'src/app/models/Task';
import { Group } from '../../../../models/Group';
import { User } from '../../../../models/User';
import { Router } from '@angular/router';
import { GroupService } from '../../../../services/group.service';
import { UserService } from '../../../../services/user.service';
import { ConfigsFormComponent } from '../../components/configs-form/configs-form.component';
import { Config } from 'src/app/models/Config';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-configs-create-page',
  templateUrl: './configs-create-page.component.html',
  styleUrls: ['./configs-create-page.component.scss'],
})
export class ConfigsCreatePageComponent implements OnInit {
  public users: User[];
  public groups: Group[];

  form: FormGroup;
  group: Group;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ConfigService,
    private groupService: GroupService,
    private userService: UserService
  ) {
    this.userService.findAll().subscribe((result) => {
      this.users = result;
    });
    this.groupService.findAll().subscribe((result) => {
      this.groups = result;
    });
  }

  public ngOnInit(): void {
    this.form = ConfigsFormComponent.createForm(
      this.fb,
      new Config(
        0,
        '',
        '',
        '',
        '',
        false,
        0,
        0,
        1,
        false,
        new Array<Source>(),
        new Array<Destination>(),
        new Array<Task>()
      )
    );
  }

  public saveConfig(values: any): void {
    this.service
      .insert(values)
      .subscribe(() => this.router.navigate(['/groups/list']));
  }
}
