import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewSp500WidgetComponent } from './dashboard-view-sp500-widget.component';

describe('Sp500WidgetComponent', () => {
  let component: DashboardViewSp500WidgetComponent;
  let fixture: ComponentFixture<DashboardViewSp500WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardViewSp500WidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardViewSp500WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
