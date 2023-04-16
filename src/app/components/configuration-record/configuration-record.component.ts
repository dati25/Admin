import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../models/Config';
import { configService } from '../../services/config.service';

@Component({
    selector: 'app-users-list-page',
    templateUrl: './configuration-record.component.html',
    styleUrls: ['./configuration-record.component.scss'],
})
export class ConfigurationRecordComponent implements OnInit {
    @Input()
    public configData: Config[] = [];

    public constructor(private service: configService) {}

    public ngOnInit(): void {}

    public deleteConfig(config: Config): void {
        this.service.delete(config).subscribe();

        location.reload();
    }
}
