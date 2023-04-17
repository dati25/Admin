import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Config } from '../../models/Config';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss'],
})
export class ConfigurationFormComponent {
    backupType: string = 'full';
    sourceType: string = '';

    radioElementSimple = document.getElementById('simpleradio');
    radioElementAdvanced = document.getElementById('advancedradio');

    @Input()
    form: FormGroup;

    @Output()
    saved: EventEmitter<any> = new EventEmitter<any>();

    public static createForm(fb: FormBuilder, config: Config): FormGroup {
        selectedBackupType: config.type;

        return fb.group({
            name: config.name,
            type: config.type,
            repeatPeriod: config.repeatPeriod,
            expirationDate: config.expirationDate,
            compress: config.compress,
            retention: config.retention,
            packageSize: config.packageSize,
            status: config.status,
        });
    }

    public save(): void {
        // this.form.value.type = 'full';
        // this.form.value.repeatPeriod = '* * * * *';
        // this.form.value.expirationDate = '2023-04-21T19:58:03';
        // this.form.value.compress = false;
        // this.form.value.retention = 1;
        // this.form.value.packageSize = 1;
        // this.form.value.status = false;

        // console.log(this.form.value);

        this.saved.emit(this.form.value);
    }

    public updateButton(text: string) {
        this.backupType = text;
    }

    public updateSourceType(text: string) {
        this.sourceType = text;
    }

    public getBackupType() {}
}
