import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
    @Input() label: string = '';
    @Input() text_left: string = '';
    @Input() text_right: string = '';
    @Input() value: boolean = false;

    constructor() {}

    ngOnInit() {}
}
