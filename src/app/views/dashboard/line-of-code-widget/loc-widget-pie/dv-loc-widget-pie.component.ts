import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {DxPieChartComponent} from 'devextreme-angular';
import {ElementSizeInterface} from '../../../../common/components/das-auto-size/das-auto-size.component';
import {DasGridComponent} from '../../../../common/components/das-grid/das-grid.component';
import {
  DasGridCellTemplateEnum,
  DasGridColumnInterface,
  DasGridColumnTypeEnum
} from '../../../../common/components/das-grid/services/das-grid-column-interface';
import {DasDashboardCoreEventService} from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import {DasWidgetContentBase} from '../../../../common/components/dashboard-core/services/das-widget-content-base';

@Component({
  selector: 'das-dv-loc-widget-pie',
  templateUrl: './dv-loc-widget-pie.component.html',
  styleUrls: ['./dv-loc-widget-pie.component.scss']
})
export class DvLocWidgetPieComponent extends DasWidgetContentBase {
  @ViewChild('pieChart') pieChartComponent: DxPieChartComponent;
  @ViewChild('gridComponent') gridComponent: DasGridComponent;

  @Input() pieData: any[] = [];
  @Input() total: any;



  size: ElementSizeInterface={height: 300, width: 300};



  readonly title = 'Dashboard Starter UI LOC';

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
    this.pieChartComponent?.instance?.render();
    this.gridComponent?.repaint()
  };

  customizeLabel(arg: any) {
    return `${arg.argument} ${(arg.percent * 100).toFixed(1)}%`;
  }

}
