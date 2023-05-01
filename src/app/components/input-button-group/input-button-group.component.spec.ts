import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonGroupComponent } from './input-button-group.component';

describe('InputButtonGroupComponent', () => {
  let component: InputButtonGroupComponent;
  let fixture: ComponentFixture<InputButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
