import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../../../models/Admin';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss'],
})
export class LoginPageComponentComponent {
  constructor() {}

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    return fb.group({
      username: admin.username,
      password: admin.password,
    });
  }

  public save(): void {
    console.log(this.form);
    this.saved.emit(this.form.value);
  }
}
