import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { DvDemoBWidgetComponent } from './dv-demo-b-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoBWidgetComponent;
  let fixture: ComponentFixture<DvDemoBWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoBWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
