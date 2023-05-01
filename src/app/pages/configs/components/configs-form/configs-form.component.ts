import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Config } from '../../../../models/Config';
import { Source } from '../../../../models/Source';
import { Destination } from '../../../../models/Destination';
import { Group } from 'src/app/models/Group';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss'],
})
export class ConfigsFormComponent {
  constructor() {}

  get sources() {
    return this.form.get('sources') as FormArray;
  }

  get destinations() {
    return this.form.get('destinations') as FormArray;
  }

  @Input()
  form: FormGroup;

  @Input()
  users: User[];

  @Input()
  groups: Group[];

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
            path: source.path,
          })
        )
      ),
      destinations: fb.array(
        config.destinations.map((destination: Destination) =>
          fb.group({
            type: destination.type,
            path: destination.path,
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
