import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreationPageComponent } from './admincreation-page.component';

describe('AdmincreationPageComponent', () => {
  let component: AdmincreationPageComponent;
  let fixture: ComponentFixture<AdmincreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
