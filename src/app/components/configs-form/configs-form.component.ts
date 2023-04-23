import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Config } from '../../models/Config';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss'],
})
export class ConfigsFormComponent {
  constructor() {}

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, config: Config): FormGroup {
    return fb.group({
      name: config.name,
      type: config.type,
      repeatPeriod: config.repeatPeriod,
      expirationDate: config.expirationDate,
      compress: config.compress,
      retention: config.retention,
      packageSize: config.packageSize,
      createdBy: config.createdBy,
      status: config.status,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }

  public goBack(): void {
    window.history.back();
  }
}
