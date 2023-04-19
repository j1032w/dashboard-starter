import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../test-services/common-test-config';
import { DasDashboardCoreModule } from '../das-dashboard-core.module';

import { DasWidgetCoreComponent } from './das-widget-core.component';

describe('WidgetComponent', () => {
  let component: DasWidgetCoreComponent;
  let fixture: ComponentFixture<DasWidgetCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DasWidgetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
