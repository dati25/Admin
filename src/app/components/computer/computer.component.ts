import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-computer',
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
    @Input() name: string = '';
    @Input() mac: string = '';
    @Input() ip: string = '';
    @Input() status: string = '';

    constructor() {}

    ngOnInit(): void {}
}
