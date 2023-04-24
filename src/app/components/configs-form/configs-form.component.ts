import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Config } from '../../models/Config';
import { Source } from '../../models/Source';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss'],
})
export class ConfigsFormComponent {
  constructor() {}

  get sources() {
    console.log(this.form.get('sources') as FormArray);
    return this.form.get('sources') as FormArray;
  }

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
      sources: fb.array(
        config.sources.map((source: Source) =>
          fb.group({
            id: source.id,
            path: source.path,
          })
        )
      ),
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }

  public goBack(): void {
    window.history.back();
  }
}
