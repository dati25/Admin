import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCronComponent } from './input-cron.component';

describe('InputCronComponent', () => {
  let component: InputCronComponent;
  let fixture: ComponentFixture<InputCronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
