import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardWidgetSettingComponent } from './das-dashboard-widget-setting.component';

describe('WidgetSettingComponent', () => {
  let component: DasDashboardWidgetSettingComponent;
  let fixture: ComponentFixture<DasDashboardWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardWidgetSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
