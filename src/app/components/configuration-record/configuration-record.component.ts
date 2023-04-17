import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Config } from '../../models/Config';

@Component({
    selector: 'app-configuration-record',
    templateUrl: './configuration-record.component.html',
    styleUrls: ['./configuration-record.component.scss'],
})
export class ConfigurationRecordComponent implements OnInit {
    @Input()
    public configs: Config[];

    @Output()
    public deleted: EventEmitter<Config> = new EventEmitter<Config>();

    @Output()
    public edited: EventEmitter<Config> = new EventEmitter<Config>();

    public constructor() {}

    public ngOnInit(): void {}
}
