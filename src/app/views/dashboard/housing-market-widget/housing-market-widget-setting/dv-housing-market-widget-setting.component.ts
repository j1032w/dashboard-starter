import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

import { DasWidgetSettingBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-setting-base.component';
import { DasHousingMarketQueryBuilderComponent } from '../../../common/hosing-market-query-builder/das-housing-market-query-builder.component';
import { HOUSING_MARKET_DEMO_QUERY } from '../../../common/hosing-market-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-dv-housing-market-widget-setting',
  templateUrl: './dv-housing-market-widget-setting.component.html',
  styleUrls: ['./dv-housing-market-widget-setting.component.scss']
})
export class DvHousingMarketWidgetSettingComponent extends DasWidgetSettingBaseComponent implements OnInit {
  @ViewChild('queryBuilderComponent') queryBuilderComponent: DasHousingMarketQueryBuilderComponent;
  @ViewChild('contentTemplate') contentTemplate: ElementRef;

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
