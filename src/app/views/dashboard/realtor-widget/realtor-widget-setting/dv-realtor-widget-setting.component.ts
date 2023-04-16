import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  DasWidgetSettingComponent
} from '../../../../common/components/dashbarod-core/das-widget-setting/das-widget-setting.component';
import {
  DasDashboardCoreService
} from '../../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { REALTOR_DEMO_QUERY } from '../../../common/realtor-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-dv-realtor-widget-setting',
  templateUrl: './dv-realtor-widget-setting.component.html',
  styleUrls: ['./dv-realtor-widget-setting.component.scss']
})
export class DvRealtorWidgetSettingComponent extends DasWidgetSettingComponent {
  query = REALTOR_DEMO_QUERY;

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
