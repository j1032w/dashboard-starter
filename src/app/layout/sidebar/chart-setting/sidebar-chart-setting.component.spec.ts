import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarChartSettingComponent } from './sidebar-chart-setting.component';

describe('ChartSettingComponent', () => {
  let component: SidebarChartSettingComponent;
  let fixture: ComponentFixture<SidebarChartSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarChartSettingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarChartSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
