import { Component, Input, ViewChild } from '@angular/core';
import { DisplayGrid, GridsterComponent, GridType } from 'angular-gridster2';
import { DasDashboardService } from './services/das-dashboard.service';
import { DasWidgetOption } from './services/dasWidgetOption';

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
    pushResizeItems: true,

    displayGrid: DisplayGrid.OnDragAndResize,
    gridType: GridType.VerticalFixed,
    margin: 10,
    minCols: 12,
    maxCols: 12,
    mobileBreakpoint: 800,
    fixedColWidth: 100,
    fixedRowHeight: 45,
    minItemCols:2,


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

  @ViewChild('gridsterComponent', { static: true }) gridsterComponent: GridsterComponent;


  constructor(public readonly dashboardService: DasDashboardService) {
  }

  removeItem($event: MouseEvent | TouchEvent, item: DasWidgetOption): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboardService.widgetOptions.splice(this.dashboardService.widgetOptions.indexOf(item), 1);
  }

  toggleDashboardSettingVisibility(){
    this.dashboardService.isSettingVisible = !this.dashboardService.isSettingVisible;

  }

  toggleMinimizeItem($event: any, gristerItemComponet: any, item: DasWidgetOption): void {
    $event.preventDefault();
    $event.stopPropagation();
    item.isMinimized = !item.isMinimized;

    if (item.isMinimized) {
      item.rows = 1;
      gristerItemComponet.$item.rows = 1;
      gristerItemComponet.setSize();

    } else {
      item.rows = 4;
      gristerItemComponet.$item.rows = 4;
      gristerItemComponet.setSize();
    }

    // this.gridsterComponent.updateGrid();
    //this.gridsterComponent.optionsChanged();
    // this.gridsterComponent.gridRenderer.updateGridster();
    //this.gridsterComponent.setGridSize();
    // this.gridsterComponent['calculateLayout']();
    //this.gridsterComponent.gridRenderer.updateGridster();

    this.gridsterComponent.calculateLayout$.next();

    //this.dashboardService.widgets = _.cloneDeep(this.dashboardService.widgets);

  }
}

