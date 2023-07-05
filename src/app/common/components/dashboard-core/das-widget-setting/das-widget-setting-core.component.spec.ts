import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTestConfig } from '../../../test-services/common-test-config';
import { DasDashboardCoreModule } from '../das-dashboard-core.module';
import { DasWidgetSettingCoreComponent } from './das-widget-setting-core.component';

describe('WidgetSettingComponent', () => {
  let component: DasWidgetSettingCoreComponent;
  let fixture: ComponentFixture<DasWidgetSettingCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DasWidgetSettingCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
