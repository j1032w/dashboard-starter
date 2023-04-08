import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetDynamicLoaderDirective } from './dashboard-widget-dynamic-loader.directive';

describe('WidgetContentComponent', () => {
  let component: DashboardWidgetDynamicLoaderDirective;
  let fixture: ComponentFixture<DashboardWidgetDynamicLoaderDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWidgetDynamicLoaderDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetDynamicLoaderDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
