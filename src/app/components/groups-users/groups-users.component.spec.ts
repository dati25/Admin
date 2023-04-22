import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsUsersComponent } from './groups-users.component';

describe('GroupsUsersComponent', () => {
  let component: GroupsUsersComponent;
  let fixture: ComponentFixture<GroupsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
