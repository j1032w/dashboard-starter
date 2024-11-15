import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../common/test-services/common-test-config';
import {DasSidebarModule} from '../das-sidebar.module';

import { SidebarChartSettingComponent } from './sidebar-chart-setting.component';

describe('ChartSettingComponent', () => {
  let component: SidebarChartSettingComponent;
  let fixture: ComponentFixture<SidebarChartSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [...CommonTestConfig.imports, DasSidebarModule, SidebarChartSettingComponent]
}).compileComponents();

    fixture = TestBed.createComponent(SidebarChartSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
