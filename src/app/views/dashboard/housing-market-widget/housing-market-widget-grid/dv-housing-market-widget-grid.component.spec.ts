import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { DvHousingMarketWidgetGridComponent } from './dv-housing-market-widget-grid.component';

describe('HousingMarketTableComponent', () => {
  let component: DvHousingMarketWidgetGridComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
