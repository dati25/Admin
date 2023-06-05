import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() errorMessage: string;

  @Output()
  closed: EventEmitter<any> = new EventEmitter<any>();

  public closeError(): void {
    this.closed.emit();
  }
}
