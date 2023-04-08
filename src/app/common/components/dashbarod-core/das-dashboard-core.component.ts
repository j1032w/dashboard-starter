import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent } from 'angular-gridster2';
import { GRIDSTER_OPTIONS } from './services/das-dashbaord-constant';
import { DasDashboardCoreService } from './services/das-dashboard-core.service';
import { DasWidgetOption } from './services/das-widget-option';


@Component({
  selector: 'das-dashboard-core',
  templateUrl: './das-dashboard-core.component.html',
  styleUrls: ['./das-dashboard-core.component.scss']
})

export class DasDashboardCoreComponent implements OnInit {
  @Input() widgetOptions: DasWidgetOption[] = [];

  gridsterOptions: any = GRIDSTER_OPTIONS;

  @ViewChild('gridsterComponent', { static: true }) gridsterComponent: GridsterComponent;


  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }


  ngOnInit() {
    this.dashboardService.widgetOptions = this.widgetOptions;
  }

  removeItem($event: MouseEvent | TouchEvent, item: DasWidgetOption): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboardService.widgetOptions.splice(this.dashboardService.widgetOptions.indexOf(item), 1);
  }

  showHideDashboardSetting() {
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

