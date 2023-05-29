import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
})
export class InputSwitchComponent {
  @Input()
  form: FormGroup;

  @Input()
  label: string;

  @Input()
  label1: string;

  @Input()
  label2: string;

  @Input()
  id1: string;

  @Input()
  id2: string;

  @Input()
  name: string;
}
