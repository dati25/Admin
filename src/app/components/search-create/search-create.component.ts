import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-create',
  templateUrl: './search-create.component.html',
  styleUrls: ['./search-create.component.scss'],
})
export class SearchCreateComponent {
  @Input()
  button: string;

  @Input()
  link: string;
}
