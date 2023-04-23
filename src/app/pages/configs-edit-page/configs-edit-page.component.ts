import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../models/Config';
import { ConfigsFormComponent } from '../../components/configs-form/configs-form.component';

@Component({
  selector: 'app-configs-edit-page',
  templateUrl: './configs-edit-page.component.html',
  styleUrls: ['./configs-edit-page.component.scss'],
})
export class ConfigsEditPageComponent implements OnInit {
  form: FormGroup;

  config: Config;

  public constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ConfigService
  ) {}

  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.findById(id).subscribe((config) => {
      this.config = config;
      this.form = ConfigsFormComponent.createForm(this.fb, config);
    });
  }

  public saveConfig(values: any): void {
    Object.assign(this.config, values);

    this.service.update(this.config).subscribe(() => window.history.back());
  }
}
