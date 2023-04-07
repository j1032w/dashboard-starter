import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetDynamicLoaderComponent } from './dashboard-widget-dynamic-loader.component';

describe('WidgetContentComponent', () => {
  let component: DashboardWidgetDynamicLoaderComponent;
  let fixture: ComponentFixture<DashboardWidgetDynamicLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWidgetDynamicLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetDynamicLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
