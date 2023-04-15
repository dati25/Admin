import { Component, OnInit } from '@angular/core';
import { configService } from '../../services/config.service';
import { Config } from '../../models/Config';

@Component({
    selector: 'app-users-list-page',
    templateUrl: './configuration-record.component.html',
    styleUrls: ['./configuration-record.component.scss'],
})
export class ConfigurationRecordComponent implements OnInit {
    public data: Config[];

    public constructor(private service: configService) {}

    public ngOnInit(): void {
        this.service.findAll().subscribe((result) => (this.data = result));
    }
}
