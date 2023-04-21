import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../models/Admin';

@Component({
  selector: 'app-settings-report-form',
  templateUrl: './settings-report-form.component.html',
  styleUrls: ['./settings-report-form.component.scss'],
})
export class SettingsReportFormComponent {
  public showBasic: boolean = true;
  public cron: string[] = ['*', '*', '*', '*', '*'];

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public OnRadioClick(input: boolean) {
    this.showBasic = input;
  }

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    console.log('jsem tady');
    return fb.group({
      username: admin.username,
      email: admin.email,
      repeatPeriod: '* * * * *',
    });
    console.log('asi jsem se creatnul');
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
  public cronChange(value: string, index: number) {
    this.cron[index] = value;
    console.log(this.cron);
  }
}
