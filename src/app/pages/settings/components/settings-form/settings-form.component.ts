import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../../models/Admin';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent {
  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    return fb.group({
      username: admin.username,
      email: admin.email,
      repeatPeriod: admin.repeatPeriod,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
