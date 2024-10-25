import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DasDashboardCoreModule} from '../../../../common/components/dashboard-core/das-dashboard-core.module';
import {CommonTestConfig} from '../../../../common/test-services/common-test-config';
import {DvSP500WidgetModule} from '../dv-sp500-widget.module';

import { DvSp500WidgetSettingComponent } from './dv-sp500-widget-setting.component';

describe('DvSp500WidgetSettingComponent', () => {
  let component: DvSp500WidgetSettingComponent;
  let fixture: ComponentFixture<DvSp500WidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvSp500WidgetSettingComponent],
      imports: [...CommonTestConfig.imports, DvSP500WidgetModule, DasDashboardCoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
