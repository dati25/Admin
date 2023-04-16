import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Config } from '../../models/Config';
import { group } from '@angular/animations';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss'],
})
export class ConfigurationFormComponent {
    selectedBackupType = 'Full';
    selectedPathType = 'Local';
    selectedPathType2 = 'FTP';
    showBasic = true;

    @Input()
    form!: FormGroup;

    @Output()
    saved: EventEmitter<any> = new EventEmitter<any>();

    public static createForm(fb: FormBuilder, config: Config): FormGroup {
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
        this.saved.emit(this.form.value);
    }

    updateButton(text: string) {
        this.selectedBackupType = text;
    }

    updatePathType(text: string) {
        this.selectedPathType = text;
    }
    updatePathType2(text: string) {
        this.selectedPathType2 = text;
    }
    OnRadioClick(selectedValue: boolean) {
        this.showBasic = selectedValue;
    }
}
