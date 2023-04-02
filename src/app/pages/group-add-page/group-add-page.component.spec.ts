import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddPageComponent } from './group-add-page.component';

describe('GroupAddPageComponent', () => {
  let component: GroupAddPageComponent;
  let fixture: ComponentFixture<GroupAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
