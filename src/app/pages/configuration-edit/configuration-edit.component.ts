import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../../models/Config';
import { ConfigurationFormComponent } from '../../components/configuration-form/configuration-form.component';

@Component({
    selector: 'app-configuration-edit',
    templateUrl: './configuration-edit.component.html',
    styleUrls: ['./configuration-edit.component.scss'],
})
export class ConfigurationEditComponent implements OnInit {
    form: FormGroup;

    config: Config;

    public constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: ConfigService
    ) {}

    public ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.service.findById(id).subscribe((config) => {
            this.config = config;
            this.form = ConfigurationFormComponent.createForm(this.fb, config);
        });
    }

    public saveConfig(values: any): void {
        Object.assign(this.config, values);
        this.service
            .update(this.config)
            .subscribe(() => this.router.navigate(['/configurations']));
    }
}
