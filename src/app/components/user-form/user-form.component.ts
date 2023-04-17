import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Computer } from '../../models/Computer';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
    @Input()
    form: FormGroup;

    @Output()
    saved: EventEmitter<any> = new EventEmitter<any>();

    public static createForm(fb: FormBuilder, computer: Computer): FormGroup {
        return fb.group({
            name: computer.name,
            macAddress: computer.macAddress,
            ipAddress: computer.ipAddress,
            status: computer.status,
        });
    }

    public save(): void {
        this.saved.emit(this.form.value);
    }
}
