import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  BubbleDataPoint,
  ChartConfiguration,
  ChartData,
  ChartType,
  Point,

} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

import { ElementSizeInterface } from '../../../../common/components/das-auto-size/das-auto-size.component';
import { DasGridComponent } from '../../../../common/components/das-grid/das-grid.component';
import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';

@Component({
  selector: 'das-dv-loc-widget-pie',
  templateUrl: './dv-loc-widget-pie.component.html',
  styleUrls: ['./dv-loc-widget-pie.component.scss']
})
export class DvLocWidgetPieComponent extends DasWidgetContentBaseComponent {
  @ViewChild('pieChart') pieChartComponent: BaseChartDirective;
  @ViewChild('gridComponent') gridComponent: DasGridComponent;

  @Input() pieChartLabels: string[] = [];
  @Input() pieChartData: ChartData<'pie', number[], string>;
  @Input() total: any;

  size: ElementSizeInterface = { height: 300, width: 300 };


  public pieChartType: ChartType = 'pie';

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },

      datalabels:{
        display: true,
        formatter: (value, ctx) => {
          let sum = 0;
          const dataArr = ctx.chart.data.datasets[0].data;
          dataArr.forEach((data: number | [number, number] | Point | BubbleDataPoint | null) => {
            if (typeof data === 'number') {
              sum += data;
            }
          });

          const percentage : number = (value * 100 / sum);

          if (!ctx.chart.data.labels || percentage < 5) {
            return '';
          }

          return ctx.chart.data.labels[ctx.dataIndex];
        },
        color: 'black',
      },

      title: {
        display: true,
        text: 'Lines of Code per Language',
        color: 'black',

      }
    }
  };

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super(elementRef, dashboardCoreService);
  }

  onResized($event: ElementSizeInterface) {
    this.size = $event;
  }

  protected override readonly repaintComponent = () => {
    this.pieChartComponent?.render();
    this.gridComponent?.repaint();
  };
}
