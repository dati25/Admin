import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRecordComponent } from './group-record.component';

describe('GroupRecordComponent', () => {
  let component: GroupRecordComponent;
  let fixture: ComponentFixture<GroupRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
