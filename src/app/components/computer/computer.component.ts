import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Computer } from '../../models/Computer';

@Component({
    selector: 'app-computer',
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
    @Input()
    public computers: Computer[];

    @Output()
    public deleted: EventEmitter<Computer> = new EventEmitter<Computer>();

    @Output()
    public edited: EventEmitter<Computer> = new EventEmitter<Computer>();

    public constructor() {}

    public ngOnInit(): void {}
}
