import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BubbleDataPoint, ChartConfiguration, ChartData, ChartType, Point } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

import { ElementSizeInterface } from '../../../../common/components/das-auto-size/das-auto-size.component';
import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';

@Component({
  selector: 'das-dv-housing-market-widget-pie',
  templateUrl: './dv-housing-market-widget-pie.component.html',
  styleUrls: ['./dv-housing-market-widget-pie.component.scss']
})
export class DvHousingMarketWidgetPieComponent extends DasWidgetContentBaseComponent {
  @ViewChild('pieChart') pieChartComponent: BaseChartDirective | undefined;

  @Input() pieChartData: ChartData<'pie', number[], string>;

  public pieChartType: ChartType = 'pie';

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },

      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          let sum = 0;
          const dataArr = ctx.chart.data.datasets[0].data;
          dataArr.forEach((data: number | [number, number] | Point | BubbleDataPoint | null) => {
            if (typeof data === 'number') {
              sum += data;
            }
          });

          const percentage: number = (value * 100) / sum;

          if (!ctx.chart.data.labels || percentage < 5) {
            return '';
          }

          return ctx.chart.data.labels[ctx.dataIndex];
        },
        color: 'black'
      },

      title: {
        display: true,
        text: 'Sales by Building Type',
        color: 'black'
      }
    }
  };

  size: any = {};

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super(elementRef, dashboardCoreService);
  }

  protected override readonly repaintComponent = () => {
    this.pieChartComponent?.render();
  };

  onResized(e: ElementSizeInterface) {
    this.size = {
      height: e.height,
      width: e.width
    };
    this.repaintComponent();
  }

  customizeLabel(arg: any) {
    return `${arg.argument} ${(arg.percent * 100).toFixed(1)}%`;
  }
}
