import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../../models/Admin';
import { SessionsService } from 'src/app/services/sessions.service';

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

  constructor(private sessions: SessionsService) {}

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    return fb.group({
      old_password: '',
      new_password: '',
      rep_password: '',
      username: admin.username,
      password: admin.password,
      email: admin.email,
      repeatPeriod: admin.repeatPeriod,
    });
  }

  public save(): void {
    this.sessions
      .login(
        new Admin(
          null,
          this.form.value.old_password,
          this.form.value.username,
          null,
          null
        )
      )
      .pipe()
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('username', this.form.value.username);
          localStorage.setItem('password', this.form.value.new_password);

          if (this.form.value.new_password === this.form.value.rep_password) {
            this.form.value.password = this.form.value.new_password;
            console.log(this.form.value);
            this.saved.emit(this.form.value);
          }
        }
      });
  }
}
