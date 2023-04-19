import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasWidgetOption } from '../../../common/components/dashboard-core/services/das-widget-option';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { DvSp500WidgetComponent } from './dv-sp500-widget.component';
import { DvSP500WidgetModule } from './dv-sp500-widget.module';

describe('DvWidgetSp500Component', () => {
  let component: DvSp500WidgetComponent;
  let fixture: ComponentFixture<DvSp500WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DvSP500WidgetModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetComponent);
    component = fixture.componentInstance;
    component.widgetOption = new DasWidgetOption({
      'originalRows': 8,
      'isSettingModalVisible': false,
      'cols': 5,
      'rows': 7,
      'x': 0,
      'y': 0,
      'widgetClassName': 'DvSp500WidgetComponent',
      'title': 'Sp500 Annual Returns',
      'isMinimized': false,
      'isShowRefreshButton': false,
      'isShowFlipButton': false,
      'isFrontShown': true,
      settingData: { isTitleVisible: false }
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
