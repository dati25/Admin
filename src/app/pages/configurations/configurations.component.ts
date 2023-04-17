import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../models/Config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-configurations',
    templateUrl: './configurations.component.html',
    styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent implements OnInit {
    public data: Config[];

    public constructor(
        private service: ConfigService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.refresh();
    }

    public editConfig(config: Config): void {
        this.router.navigate(['/configuration/edit', config.id]);
    }

    public deleteConfig(config: Config): void {
        this.service.delete(config).subscribe(() => this.refresh());
    }

    private refresh(): void {
        this.service.findAll().subscribe((result) => (this.data = result));
    }
}
