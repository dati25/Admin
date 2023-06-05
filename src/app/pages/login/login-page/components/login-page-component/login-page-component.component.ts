import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionsService } from '../../../../../services/sessions.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss'],
})
export class LoginPageComponentComponent implements OnInit {
  public form: FormGroup;
  public error: boolean = false;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessions: SessionsService
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  public login(): void {
    this.sessions
      .login(this.form.value)
      .pipe(
        catchError(() => {
          this.error = true;
          return of(false);
        })
      )
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/users/list']);
        }
      });
  }
}
