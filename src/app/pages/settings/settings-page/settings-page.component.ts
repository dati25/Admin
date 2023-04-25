import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../models/Admin';
import { AdminService } from '../../../services/admin.service';
import { SettingsFormComponent } from '../components/settings-form/settings-form.component';
import { SettingsReportFormComponent } from '../components/settings-report-form/settings-report-form.component';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  form: FormGroup;
  formRight: FormGroup;

  admin: Admin;

  public constructor(private fb: FormBuilder, private service: AdminService) {}

  public ngOnInit(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    console.log('ahojda');
    this.service.findById(1).subscribe((admin) => {
      this.admin = admin;
      this.form = SettingsFormComponent.createForm(this.fb, admin);
      this.formRight = SettingsReportFormComponent.createForm(this.fb, admin);
      console.log('povedlo se vytvořit');
    });
  }

  public saveAdmin(values: any): void {
    Object.assign(this.admin, values);
    console.log(this.admin);
    this.service
      .update(this.admin)
      .subscribe(/*() => this.router.navigate(['/dashboard'])*/);
  }
  public saveEmail(values: any): void {
    Object.assign(this.admin, values);
    console.log(this.admin);
    this.service
      .update(this.admin)
      .subscribe(/*() => this.router.navigate(['/dashboard'])*/);
  }
}
