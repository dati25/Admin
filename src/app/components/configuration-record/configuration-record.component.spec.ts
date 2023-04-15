import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationRecordComponent } from './configuration-record.component';

describe('ConfigurationRecordComponent', () => {
  let component: ConfigurationRecordComponent;
  let fixture: ComponentFixture<ConfigurationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
