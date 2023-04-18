import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsCreatePageComponent } from './admins-create-page.component';

describe('AdminsCreatePageComponent', () => {
  let component: AdminsCreatePageComponent;
  let fixture: ComponentFixture<AdminsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
