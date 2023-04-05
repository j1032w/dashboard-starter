import { Component, Input } from '@angular/core';
import { DisplayGrid, GridType } from 'angular-gridster2';
import { DasDashboardService } from './services/das-dashboard.service';
import { DasWidget } from './services/das.widget';

@Component({
  selector: 'das-dashboard',
  templateUrl: './das-dashboard.component.html',
  styleUrls: ['./das-dashboard.component.scss']
})
export class DasDashboardComponent {
  @Input() options: any = {
    //compactType: CompactType.CompactUp,
    swap: true,
    pushItems: true,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,

    displayGrid: DisplayGrid.OnDragAndResize,
    gridType: GridType.VerticalFixed,
    margin: 10,
    minCols: 12,
    maxCols: 12,
    mobileBreakpoint: 800,
    fixedColWidth: 100,
    fixedRowHeight: 100,

    draggable: {
      enabled: true,
      disableScrollHorizontal: true,
      ignoreContent: true
    },

    resizable: {
      enabled: true,
      handles: {
        n: false,
        nw: false,
        ne: false

      }
    }
  };

  constructor(public readonly dashboardService: DasDashboardService) {
  }

  removeItem($event: MouseEvent | TouchEvent, item: DasWidget): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboardService.widgets.splice(this.dashboardService.widgets.indexOf(item), 1);
  }
}
