import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent {
  constructor() {}

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, user: User): FormGroup {
    return fb.group({
      name: user.name,
      macAddress: user.macAddress,
      ipAddress: user.ipAddress,
      status: user.status,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
