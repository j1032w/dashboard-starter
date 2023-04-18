import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvSp500WidgetTableComponent } from './dv-sp500-widget-table.component';

describe('DvSp500WidgetBackComponent', () => {
  let component: DvSp500WidgetTableComponent;
  let fixture: ComponentFixture<DvSp500WidgetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvSp500WidgetTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
