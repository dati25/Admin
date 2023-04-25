import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { Config } from '../../../models/Config';

@Component({
  selector: 'app-configs-list-page',
  templateUrl: './configs-list-page.component.html',
  styleUrls: ['./configs-list-page.component.scss'],
})
export class ConfigsListPageComponent implements OnInit {
  public configs: Config[];

  public constructor(private service: ConfigService, private router: Router) {}

  public ngOnInit(): void {
    this.refresh();
  }

  public editConfig(config: Config): void {
    this.router.navigate(['/configs/edit', config.id]);
  }

  public deleteConfig(config: Config): void {
    this.service.delete(config).subscribe(() => {
      this.refresh();
    });
  }

  private refresh(): void {
    this.service.findAll().subscribe((result) => (this.configs = result));
  }
}
