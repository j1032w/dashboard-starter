import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DasWidgetSettingBase } from '../../../../common/components/dashboard-core/services/das-widget=setting-base';
import {
  HOUSING_MARKET_DEMO_QUERY
} from '../../../common/hosing-market-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-dv-housing-market-widget-setting',
  templateUrl: './dv-housing-market-widget-setting.component.html',
  styleUrls: ['./dv-housing-market-widget-setting.component.scss']
})
export class DvHousingMarketWidgetSettingComponent extends DasWidgetSettingBase {

  query = HOUSING_MARKET_DEMO_QUERY;


  constructor(protected override readonly formBuilder: FormBuilder) {
    super(formBuilder);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.formGroup = this.formBuilder.group({
      title: [this.widgetOption.title]
    });

  }

  onApply() {
    this.widgetOption.settingData = this.query;
  }

}
