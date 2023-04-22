import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/Group';
import { GroupsFormComponent } from '../../components/groups-form/groups-form.component';

@Component({
  selector: 'app-groups-create-page',
  templateUrl: './groups-create-page.component.html',
  styleUrls: ['./groups-create-page.component.scss'],
})
export class GroupsCreatePageComponent implements OnInit {
  form: FormGroup;

  group: Group;

  public constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: GroupService
  ) {}

  public ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.service.findById(id).subscribe((group) => {
    //   this.group = group;
    //   this.form = GroupsFormComponent.createForm(this.fb, group);
    // }
  }

  // public saveGroup(values: any): void {
  //   Object.assign(this.group, values);
  //   this.service.update(this.group).subscribe(() => window.history.back());
  // }
}
