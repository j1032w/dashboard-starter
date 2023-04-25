import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonTestConfig} from '../../../test-services/common-test-config';
import {DasDashboardCoreModule} from '../das-dashboard-core.module';

import {DashboardWidgetListComponent} from './dashboard-widget-list.component';

describe('SettingComponent', () => {
  let component: DashboardWidgetListComponent;
  let fixture: ComponentFixture<DashboardWidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
