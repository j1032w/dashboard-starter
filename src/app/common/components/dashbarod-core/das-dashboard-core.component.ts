import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent } from 'angular-gridster2';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';
import { DasToastService } from '../../services/das-toast.service';

import { GRIDSTER_OPTIONS } from './services/das-dashbaord-constant';
import { DasDashboardCoreService } from './services/das-dashboard-core.service';
import { DasWidgetOption } from './services/das-widget-option';

@Component({
  selector: 'das-dashboard-core',
  templateUrl: './das-dashboard-core.component.html',
  styleUrls: ['./das-dashboard-core.component.scss'],
  providers: [DasToastService]
})

export class DasDashboardCoreComponent implements OnInit {
  @Input() defaultWidgetOptions: DasWidgetOption[] = [];

  widgetOptions: DasWidgetOption[] = [];

  gridsterOptions: any = GRIDSTER_OPTIONS;

  @ViewChild('gridsterComponent', { static: true }) gridsterComponent: GridsterComponent;

  private readonly localStorageWidgetOptionsKey = 'widgetOptions';

  constructor(public readonly dashboardCoreService: DasDashboardCoreService,
              private readonly toastService: DasToastService) {
    this.gridsterOptions.itemResizeCallback = this.itemResizeCallback;
  }


  ngOnInit() {
    this.getSetting();
    this.dashboardCoreService.widgetOptions = this.widgetOptions;
  }

  itemResizeCallback = (gridsterItem: any, _gridsterItemComponent: any) => {
    this.dashboardCoreService.emitWidgetResize(gridsterItem);
  };


  showHideDashboardSetting() {
    this.dashboardCoreService.isSettingVisible = !this.dashboardCoreService.isSettingVisible;
  }


  saveSetting() {
    const data = JSON.stringify(this.dashboardCoreService.widgetOptions);
    localStorage.setItem(this.localStorageWidgetOptionsKey, data);
    this.toastService.showSuccess('Dashboard settings saved into browser local storage successfully.');
  }

  resetSetting(isShowToast = true) {
    localStorage.removeItem(this.localStorageWidgetOptionsKey);
    this.widgetOptions.length=0;
    this.widgetOptions.push(...(_.cloneDeep(this.defaultWidgetOptions)));
    if(isShowToast){
      this.toastService.showSuccess('Dashboard settings reset to default successfully.');
    }

  }

  private getSetting() {
    const data = localStorage.getItem(this.localStorageWidgetOptionsKey);
    if (!data) {
      this.resetSetting(false);
      return;
    }

    this.widgetOptions = JSON.parse(data);
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

