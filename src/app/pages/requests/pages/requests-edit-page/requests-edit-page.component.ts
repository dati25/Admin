import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../models/User';
import { RequestsFormComponent } from '../../components/requests-form/requests-form.component';

@Component({
  selector: 'app-requests-edit-page',
  templateUrl: './requests-edit-page.component.html',
  styleUrls: ['./requests-edit-page.component.scss'],
})
export class RequestsEditPageComponent implements OnInit {
  form: FormGroup;
  user: User;

  public constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: UserService
  ) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.findById(id).subscribe((user) => {
      this.user = user;
      this.form = RequestsFormComponent.createForm(this.fb, user);
    });
  }

  public saveUser(values: any): void {
    Object.assign(this.user, values);
    this.service.update(this.user).subscribe(() => window.history.back());
  }
}
