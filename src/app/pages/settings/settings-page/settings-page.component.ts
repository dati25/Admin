import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../models/Admin';
import { AdminService } from '../../../services/admin.service';
import { SettingsFormComponent } from '../components/settings-form/settings-form.component';
import { SettingsReportFormComponent } from '../components/settings-report-form/settings-report-form.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  hasError: boolean;
  errorMessage: string = '';

  form: FormGroup;
  formRight: FormGroup;

  admin: Admin;

  public constructor(private fb: FormBuilder, private service: AdminService) {}

  public ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');

    this.service.findById(1).subscribe((admin) => {
      this.admin = admin;
      this.form = SettingsFormComponent.createForm(this.fb, admin);
      this.formRight = SettingsReportFormComponent.createForm(this.fb, admin);
    });
  }

  public saveAdmin(values: any): void {
    Object.assign(this.admin, values);

    this.service.update(this.admin).subscribe(
      () => window.history.back(),
      (error: HttpErrorResponse) => {
        this.hasError = true;

        for (let m in error.error) {
          this.errorMessage = this.errorMessage.concat(`${error.error[m]}<br>`);
        }
      }
    );
  }

  public saveEmail(values: any): void {
    Object.assign(this.admin, values);

    this.service.update(this.admin).subscribe(
      () => window.history.back(),
      (error: HttpErrorResponse) => {
        this.hasError = true;

        for (let m in error.error) {
          this.errorMessage = this.errorMessage.concat(`${error.error[m]}<br>`);
        }
      }
    );
  }

  public closeError(): void {
    this.hasError = false;
    this.errorMessage = '';
  }
}
