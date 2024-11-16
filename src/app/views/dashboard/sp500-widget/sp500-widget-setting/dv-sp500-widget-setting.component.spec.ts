import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { DvSp500WidgetSettingComponent } from './dv-sp500-widget-setting.component';

describe('DvSp500WidgetSettingComponent', () => {
  let component: DvSp500WidgetSettingComponent;
  let fixture: ComponentFixture<DvSp500WidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
