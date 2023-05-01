import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-button-group',
  templateUrl: './input-button-group.component.html',
  styleUrls: ['./input-button-group.component.scss'],
})
export class InputButtonGroupComponent {
  @Input()
  form: FormGroup;
}
