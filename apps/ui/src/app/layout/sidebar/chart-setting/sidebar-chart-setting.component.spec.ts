import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { SidebarChartSettingComponent } from './sidebar-chart-setting.component';

describe('ChartSettingComponent', () => {
  let component: SidebarChartSettingComponent;
  let fixture: ComponentFixture<SidebarChartSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarChartSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
