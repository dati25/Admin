import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { configService } from 'src/app/services/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../../models/Config';
import { ConfigurationFormComponent } from '../../components/configuration-form/configuration-form.component';

@Component({
    selector: 'app-configuration-edit',
    templateUrl: './configuration-edit.component.html',
    styleUrls: ['./configuration-edit.component.scss'],
})
export class ConfigurationEditComponent {
    form: FormGroup;

    config: Config;

    public constructor(
        private fb: FormBuilder,
        private router: Router,
        private service: configService
    ) {}

    public ngOnInit(): void {
        this.form = ConfigurationFormComponent.createForm(
            this.fb,
            new Config(0, '', '', '', '', true, 10, 10, false)
        );
        console.log('AAAAAAA we are here');
    }

    public saveConfig(values: any): void {
        console.log('AABB meow');
        this.service
            .insert(values)
            .subscribe(() => this.router.navigate(['/configuration']));
    }
}
