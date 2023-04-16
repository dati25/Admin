import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/Config';
import { configService } from '../../services/config.service';

@Component({
    selector: 'app-configurations',
    templateUrl: './configurations.component.html',
    styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit {
    public configData: Config[] = [];

    public constructor(private service: configService) {}

    public ngOnInit(): void {
        this.service
            .findAll()
            .subscribe((result) => (this.configData = result));
    }
}
