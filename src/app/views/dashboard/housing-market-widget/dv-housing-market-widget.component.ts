import { Component, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DasDashboardCoreService } from '../../../common/components/dashboard-core/services/das-dashboard-core.service';
import { DasWidgetBase } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DvHousingMarketWidgetPieComponent } from './housing-market-widget-pie/dv-housing-market-widget-pie.component';
import {
  BuildingTypePercentageInterface,
  DvHousingMarketService,
  HOUSE_MARKET_WIDGET_SPINNER_ID
} from './services/dv-housing-market.service';


@Component({
  selector: 'das-dv-housing-market-widget',
  templateUrl: './dv-housing-market-widget.component.html',
  styleUrls: ['./dv-housing-market-widget.component.scss']
})
export class DvHousingMarketWidgetComponent extends DasWidgetBase {
  @ViewChild('pieComponent', { static: true }) pieComponent: DvHousingMarketWidgetPieComponent;

  readonly SPINNER_ID = HOUSE_MARKET_WIDGET_SPINNER_ID;

  dataSource: BuildingTypePercentageInterface[] = [];

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreService,
    protected override readonly toastService: DasToastService,
    protected readonly housingMarketService: DvHousingMarketService
  ) {
    super(dashboardCoreService, toastService);
  }


  override ngOnInit() {
    super.ngOnInit();

    this.housingMarketService.getHomeTypePercentages$(this.widgetOption.settingData.mongoQuery)
      .pipe(takeUntil(this.ngUnsubscribe$)).subscribe(data => {
        this.dataSource = data;
      }
    );

  }

  protected override readonly refresh = () => {
    this.housingMarketService.getHomeTypePercentages$({ filter: this.widgetOption.settingData.mongoQuery })
      .pipe(takeUntil(this.ngUnsubscribe$)).subscribe(data => {
      this.dataSource = data;
    });
  };




}
