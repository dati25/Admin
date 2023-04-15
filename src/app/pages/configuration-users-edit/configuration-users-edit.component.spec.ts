import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationUsersEditComponent } from './configuration-users-edit.component';

describe('ConfigurationUsersEditComponent', () => {
    let component: ConfigurationUsersEditComponent;
    let fixture: ComponentFixture<ConfigurationUsersEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfigurationUsersEditComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigurationUsersEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
