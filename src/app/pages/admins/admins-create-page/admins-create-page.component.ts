import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from '../../../models/Admin';
import { AdminService } from 'src/app/services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admins-create-page',
  templateUrl: './admins-create-page.component.html',
  styleUrls: ['./admins-create-page.component.scss'],
})
export class AdminsCreatePageComponent implements OnInit {
  hasError: boolean;
  errorMessage: string = '';

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.form = AdminsCreatePageComponent.createForm(
      new FormBuilder(),
      new Admin(null, '', '', '', '* * * * ?')
    );
  }

  @Input()
  form: FormGroup;

  @Output()
  created: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    return fb.group({
      username: admin.username,
      email: admin.email,
      password: admin.password,
    });
  }

  public create(): void {
    this.service.insert(this.form.value).subscribe(
      () => window.history.back(),
      (error: HttpErrorResponse) => {
        this.hasError = true;

        for (let m in error.error) {
          this.errorMessage = this.errorMessage.concat(`${error.error[m]}<br>`);
        }
      }
    );
  }

  public closeError() {
    this.hasError = false;
    this.errorMessage = '';
  }
}
