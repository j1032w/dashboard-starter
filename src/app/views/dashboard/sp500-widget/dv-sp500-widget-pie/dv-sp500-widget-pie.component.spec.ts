import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvSp500WidgetPieComponent } from './dv-sp500-widget-pie.component';

describe('DvSp500WidgetPieComponent', () => {
  let component: DvSp500WidgetPieComponent;
  let fixture: ComponentFixture<DvSp500WidgetPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvSp500WidgetPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
