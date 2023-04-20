import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { DasWidgetSettingBase } from '../../../../common/components/dashboard-core/services/das-widget=setting-base';
import {
  DasHousingMarketQueryBuilderComponent
} from '../../../common/hosing-market-query-builder/das-housing-market-query-builder.component';
import {
  HOUSING_MARKET_DEMO_QUERY
} from '../../../common/hosing-market-query-builder/services/das-query-builder.constant';


@Component({
  selector: 'das-dv-housing-market-widget-setting',
  templateUrl: './dv-housing-market-widget-setting.component.html',
  styleUrls: ['./dv-housing-market-widget-setting.component.scss']
})
export class DvHousingMarketWidgetSettingComponent extends DasWidgetSettingBase {
  @ViewChild('queryBuilderComponent') queryBuilderComponent: DasHousingMarketQueryBuilderComponent;

  query: any = {};


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
    this.widgetOption.settingData = {
      query: this.query,
      mongoQuery: this.queryBuilderComponent.getMongoQuery()
    };
  }

  onShow() {
    this.query = _.cloneDeep(this.widgetOption.settingData?.query || HOUSING_MARKET_DEMO_QUERY);
  }
}
