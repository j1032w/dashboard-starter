import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { DvHousingMarketWidgetSettingComponent } from './dv-housing-market-widget-setting.component';

describe('DvHousingMarketWidgetSettingComponent', () => {
  let component: DvHousingMarketWidgetSettingComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
