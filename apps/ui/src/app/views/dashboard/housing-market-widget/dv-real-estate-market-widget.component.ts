import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartData } from 'chart.js';
import { isArray } from 'lodash';
import { takeUntil } from 'rxjs';
import { DasSpinnerComponent } from '../../../common/components/das-spinner/das-spinner.component';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasWidgetCoreComponent } from '../../../common/components/dashboard-core/widget-core/das-widget-core.component';
import { DasCommonComponentModule } from '../../../common/das-common-component.module';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DvHousingMarketWidgetGridComponent } from './housing-market-widget-grid/dv-housing-market-widget-grid.component';
import { DvHousingMarketWidgetPieComponent } from './housing-market-widget-pie/dv-housing-market-widget-pie.component';
import { DvHousingMarketWidgetSettingComponent } from './housing-market-widget-setting/dv-housing-market-widget-setting.component';
import { BuildingTypePercentage, DvRealEstateMarketService, HOUSE_MARKET_WIDGET_SPINNER_ID } from './services/dv-real-estate-market.service';

@Component({
  selector: 'das-dv-real-estate-market-widget',
  templateUrl: './dv-real-estate-market-widget.component.html',
  styleUrls: ['./dv-real-estate-market-widget.component.scss'],
  standalone: true,
  imports: [
    DasWidgetCoreComponent,
    DvHousingMarketWidgetPieComponent,
    DvHousingMarketWidgetGridComponent,
    DvHousingMarketWidgetSettingComponent,
    DasSpinnerComponent,
    DasCommonComponentModule,
  ],
})
export class DvRealEstateMarketWidgetComponent extends DasWidgetBaseComponent implements OnInit {
  @ViewChild('pieComponent', { static: true }) pieComponent: DvHousingMarketWidgetPieComponent;
  @ViewChild('frontTemplate') widgetFrontComponent: ElementRef;
  @ViewChild('backTemplate') widgetBackComponent: ElementRef;
  @ViewChild('settingTemplate') widgetSettingComponent: ElementRef;

  readonly SPINNER_ID = HOUSE_MARKET_WIDGET_SPINNER_ID;

  dataSource: BuildingTypePercentage[] = [];

  public pieChartData: ChartData<'pie', number[], string>;

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService,
    protected readonly housingMarketService: DvRealEstateMarketService,
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.initializeData();
    this.refresh();
  }

  protected override readonly refresh = () => {
    this.housingMarketService
      .getHomeTypePercentages$( this.widgetOption.settingData.mongoQuery ? this.widgetOption.settingData.mongoQuery : {} )
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (!isArray(data) || data.length === 0) {
          this.initializeData();

          return;
        }

        this.pieChartData = {
          labels: data.map((data: { buildingType: any }) => data.buildingType),

          datasets: [
            {
              data: data.map((data: { total: any }) => data.total),
            },
          ],
        };

        this.dataSource = data;
      });
  };

  private initializeData() {
    this.pieChartData = {
      labels:  ['Unknown'],
      datasets: [{ data: [1] }],
    };

    this.dataSource = [];
  }
}
