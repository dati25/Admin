import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-cron',
  templateUrl: './input-cron.component.html',
  styleUrls: ['./input-cron.component.scss'],
})
export class InputCronComponent {
  @Input()
  form: FormGroup;

  @Input()
  name: string;
}
