import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHousingMarketWidgetTableComponent } from './dv-housing-market-widget-table.component';

describe('HousingMarketTableComponent', () => {
  let component: DvHousingMarketWidgetTableComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvHousingMarketWidgetTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
