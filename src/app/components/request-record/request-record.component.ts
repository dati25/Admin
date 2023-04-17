import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Computer } from 'src/app/models/Computer';

@Component({
    selector: 'app-request-record',
    templateUrl: './request-record.component.html',
    styleUrls: ['./request-record.component.scss'],
})
export class RequestRecordComponent implements OnInit {
    @Input()
    public requests: Computer[];

    @Output()
    public edited: EventEmitter<Computer> = new EventEmitter<Computer>();

    @Output()
    public deleted: EventEmitter<Computer> = new EventEmitter<Computer>();

    public constructor() {}

    public ngOnInit(): void {}
}
