import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasDashboardCoreModule } from '../../../common/components/dashbarod-core/das-dashboard-core.module';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { DvHousingMarketWidgetComponent } from './dv-housing-market-widget.component';
import { DvHousingMarketWidgetModule } from './dv-housing-market-widget.module';

describe('DvHousingMarketWidgetComponent', () => {
  let component: DvHousingMarketWidgetComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DvHousingMarketWidgetModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
