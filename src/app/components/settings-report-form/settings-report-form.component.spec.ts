import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReportFormComponent } from './settings-report-form.component';

describe('SettingsReportFormComponent', () => {
  let component: SettingsReportFormComponent;
  let fixture: ComponentFixture<SettingsReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsReportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
