import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-requests-form',
  templateUrl: './requests-form.component.html',
  styleUrls: ['./requests-form.component.scss'],
})
export class RequestsFormComponent {
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
