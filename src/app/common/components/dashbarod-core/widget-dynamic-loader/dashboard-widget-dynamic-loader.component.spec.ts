import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasDashboardViewModule } from '../../../../views/dashboard/das-dashboard-view.module';
import { CommonTestConfig } from '../../../test-services/common-test-config';

import { DasWidgetDynamicLoaderDirective } from './das-widget-dynamic-loader.directive';

describe('WidgetContentComponent', () => {
  let component: DasWidgetDynamicLoaderDirective;
  let fixture: ComponentFixture<DasWidgetDynamicLoaderDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTestConfig.imports, DasDashboardViewModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DasWidgetDynamicLoaderDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
