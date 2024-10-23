import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  BubbleDataPoint,
  ChartConfiguration,
  ChartData,
  ChartType,
  Point
} from 'chart.js';
import { takeUntil } from 'rxjs';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
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
export class DvHousingMarketWidgetComponent extends DasWidgetBaseComponent implements OnInit {
  @ViewChild('pieComponent', { static: true }) pieComponent: DvHousingMarketWidgetPieComponent;
  @ViewChild('frontTemplate') widgetFrontComponent: ElementRef;
  @ViewChild('backTemplate') widgetBackComponent: ElementRef;
  @ViewChild('settingTemplate') widgetSettingComponent: ElementRef;

  readonly SPINNER_ID = HOUSE_MARKET_WIDGET_SPINNER_ID;

  dataSource: BuildingTypePercentageInterface[] = [];

  public pieChartData: ChartData<'pie', number[], string>;


  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService,
    protected readonly housingMarketService: DvHousingMarketService
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.housingMarketService
      .getHomeTypePercentages$(this.widgetOption.settingData.mongoQuery)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(response => {
        this.pieChartData = {
          labels: [
            'Apartment',
            'House',
            'Duplex',
            'Fourplex',
            'Manufactured Home',
            'Mobile Home',
            'Multi Family',
            'Parking',
            'Townhouse',
            'Triplex',
            'Unknown'
          ],

          datasets: [
            {
              data: response.map((data: { percentage: any }) => data.percentage)
            }
          ]
        };
      });
  }

  protected override readonly refresh = () => {
    this.housingMarketService
      .getHomeTypePercentages$({ filter: this.widgetOption.settingData.mongoQuery })
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => {
        this.dataSource = data;
      });
  };
}
