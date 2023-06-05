import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Admin } from '../../../../models/Admin';

@Component({
  selector: 'app-settings-report-form',
  templateUrl: './settings-report-form.component.html',
  styleUrls: ['./settings-report-form.component.scss'],
})
export class SettingsReportFormComponent {
  show: boolean = true;

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
