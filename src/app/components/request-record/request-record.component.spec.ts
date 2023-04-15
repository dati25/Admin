import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRecordComponent } from './request-record.component';

describe('RequestRecordComponent', () => {
  let component: RequestRecordComponent;
  let fixture: ComponentFixture<RequestRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
