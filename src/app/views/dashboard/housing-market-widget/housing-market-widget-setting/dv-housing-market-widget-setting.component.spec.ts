import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHousingMarketWidgetSettingComponent } from './dv-housing-market-widget-setting.component';

describe('DvHousingMarketWidgetSettingComponent', () => {
  let component: DvHousingMarketWidgetSettingComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvHousingMarketWidgetSettingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
