import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../../../../services/config.service';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../../../models/Config';
import { User } from '../../../../models/User';
import { Group } from '../../../../models/Group';
import { ConfigsFormComponent } from '../../components/configs-form/configs-form.component';

@Component({
  selector: 'app-configs-edit-page',
  templateUrl: './configs-edit-page.component.html',
  styleUrls: ['./configs-edit-page.component.scss'],
})
export class ConfigsEditPageComponent implements OnInit {
  public users: User[];
  public groups: Group[];

  form: FormGroup;
  config: Config;

  public constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ConfigService,
    private userService: UserService,
    private groupService: GroupService
  ) {}

  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.findById(id).subscribe((config) => {
      this.config = config;
      this.form = ConfigsFormComponent.createForm(this.fb, config);

      this.userService.findAll().subscribe((result) => {
        this.users = result.filter((user) => user.status !== 'q');
      });

      this.groupService.findAll().subscribe((result) => {
        this.groups = result;
      });
    });
  }

  public saveConfig(values: any): void {
    this.config.sources.forEach((source) => {
      this.service.deleteSource(source).subscribe(() => {});
    });

    this.config.destinations.forEach((dest) => {
      this.service.deleteDest(dest).subscribe(() => {});
    });

    this.config.tasks.forEach((task) => {
      if (task.group) {
        this.service
          .deleteObject(this.config, String(task.group.id), 't')
          .subscribe(() => {});
      }
    });

    this.config.tasks.forEach((task) => {
      if (task.computer) {
        this.service
          .deleteObject(this.config, String(task.computer.idPc), 'f')
          .subscribe(() => {});
      }
    });

    Object.assign(this.config, values);
    this.service.update(this.config).subscribe(() => window.history.back());
  }
}
