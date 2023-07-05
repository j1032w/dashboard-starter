import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHousingMarketWidgetGridComponent } from './dv-housing-market-widget-grid.component';

describe('HousingMarketTableComponent', () => {
  let component: DvHousingMarketWidgetGridComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvHousingMarketWidgetGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
