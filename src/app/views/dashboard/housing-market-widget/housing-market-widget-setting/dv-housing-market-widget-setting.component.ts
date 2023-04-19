import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  DasWidgetSettingCoreComponent
} from '../../../../common/components/dashbarod-core/das-widget-setting/das-widget-setting-core.component';
import {
  DasDashboardCoreService
} from '../../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { HOUSING_MARKET_DEMO_QUERY } from '../../../common/hosing-market-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-dv-housing-market-widget-setting',
  templateUrl: './dv-housing-market-widget-setting.component.html',
  styleUrls: ['./dv-housing-market-widget-setting.component.scss']
})
export class DvHousingMarketWidgetSettingComponent extends DasWidgetSettingCoreComponent {
  query = HOUSING_MARKET_DEMO_QUERY;

  constructor(
    protected override readonly formBuilder: FormBuilder,
    protected override readonly dashboardCoreService: DasDashboardCoreService
  ) {
    super(formBuilder, dashboardCoreService);

  }

  override apply() {
    this.widgetOption.settingData = this.query;
    super.apply();
  }

}
