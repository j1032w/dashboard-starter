import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetOption } from '../../../common/components/dashboard-core/services/das-widget-option';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DvHousingMarketWidgetComponent } from './dv-housing-market-widget.component';

describe('DvHousingMarketWidgetComponent', () => {
  let component: DvHousingMarketWidgetComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers],
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetComponent);
    component = fixture.componentInstance;
    component.widgetOption = new DasWidgetOption();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
