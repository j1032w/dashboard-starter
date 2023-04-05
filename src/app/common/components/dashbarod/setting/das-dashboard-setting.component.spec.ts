import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardSettingComponent } from './das-dashboard-setting.component';

describe('SettingComponent', () => {
  let component: DasDashboardSettingComponent;
  let fixture: ComponentFixture<DasDashboardSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
