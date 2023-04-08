import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSettingComponent } from './dashboard-setting.component';

describe('SettingComponent', () => {
  let component: DashboardSettingComponent;
  let fixture: ComponentFixture<DashboardSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
