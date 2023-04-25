import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsEditPageComponent } from './requests-edit-page.component';

describe('RequestsEditPageComponent', () => {
  let component: RequestsEditPageComponent;
  let fixture: ComponentFixture<RequestsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
