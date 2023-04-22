import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../models/Group';

@Component({
  selector: 'app-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./groups-form.component.scss'],
})
export class GroupsFormComponent {
  constructor() {}

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, group: Group): FormGroup {
    return fb.group({
      name: group.name,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }

  public goBack(): void {
    window.history.back();
  }
}
