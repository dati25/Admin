import { Component } from '@angular/core';
import { Admin } from '../../../models/Admin';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageComponentComponent } from './components/login-page-component/login-page-component.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.form = LoginPageComponentComponent.createForm(
      this.fb,
      new Admin(0, '', '', '', '')
    );
  }

  public postCred(values: any): void {
    console.log(values);
    this.service
      .insert(values)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
}
