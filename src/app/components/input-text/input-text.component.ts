import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input()
  form: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: string = 'text';
}
