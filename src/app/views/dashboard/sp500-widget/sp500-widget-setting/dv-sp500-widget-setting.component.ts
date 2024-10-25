import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetSettingBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-setting-base.component';
import { DasChartSp500Service } from '../../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-sp500-widget-setting',
  templateUrl: './dv-sp500-widget-setting.component.html',
  styleUrls: ['./dv-sp500-widget-setting.component.scss']
})
export class DvSp500WidgetSettingComponent extends DasWidgetSettingBaseComponent implements OnInit {
  constructor(
    private readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly formBuilder: FormBuilder,
    private readonly chartService: DasChartSp500Service
  ) {
    super(formBuilder);
  }

  override ngOnInit() {
    super.ngOnInit();

    const isTitleVisible = this.widgetOption.settingData?.isTitleVisible ?? true;
    const isLegendVisible = this.widgetOption.settingData?.isLegendVisible ?? true;

    this.formGroup.addControl('isTitleVisible', new FormControl(isTitleVisible));
    this.formGroup.addControl('isLegendVisible', new FormControl(isLegendVisible));
  }

  onApply() {
    const isTitleVisible = this.formGroup.get('isTitleVisible')?.value;
    const isLegendVisible = this.formGroup.get('isLegendVisible')?.value;

    this.widgetOption.settingData.isTitleVisible = isTitleVisible;
    this.widgetOption.settingData.isLegendVisible = isLegendVisible;

    this.chartService.isTitleVisible = isTitleVisible;
    this.chartService.isLegendVisible = isLegendVisible;
  }
}
