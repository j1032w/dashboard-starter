import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetOption } from '../../../common/components/dashboard-core/services/das-widget-option';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DvRealEstateMarketWidgetComponent } from './dv-real-estate-market-widget.component';

describe('DvHousingMarketWidgetComponent', () => {
  let component: DvRealEstateMarketWidgetComponent;
  let fixture: ComponentFixture<DvRealEstateMarketWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers],
    }).compileComponents();

    fixture = TestBed.createComponent(DvRealEstateMarketWidgetComponent);
    component = fixture.componentInstance;
    component.widgetOption = new DasWidgetOption();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
