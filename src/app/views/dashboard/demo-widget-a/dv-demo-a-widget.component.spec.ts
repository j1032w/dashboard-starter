import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasDashboardCoreModule } from '../../../common/components/dashbarod-core/das-dashboard-core.module';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { DvDemoAWidgetComponent } from './dv-demo-a-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoAWidgetComponent;
  let fixture: ComponentFixture<DvDemoAWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoAWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
