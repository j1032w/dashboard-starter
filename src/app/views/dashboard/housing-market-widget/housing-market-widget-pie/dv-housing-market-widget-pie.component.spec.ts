import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { DvHousingMarketWidgetPieComponent } from './dv-housing-market-widget-pie.component';

describe('DvHousingMarketPieComponent', () => {
  let component: DvHousingMarketWidgetPieComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvHousingMarketWidgetPieComponent],
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
