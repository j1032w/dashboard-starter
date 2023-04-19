import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent } from 'angular-gridster2';
import * as _ from 'lodash';
import { isArray } from 'lodash';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { DasConfig } from '../../services/das-config';
import { DasLocalStorageService } from '../../services/das-local-storage.service';
import { DasToastService } from '../../services/das-toast.service';

import { GRIDSTER_OPTIONS } from './services/das-dashboard-constant';
import { DasDashboardCoreService } from './services/das-dashboard-core.service';
import { DasWidgetOption } from './services/das-widget-option';


@Component({
  selector: 'das-dashboard-core',
  templateUrl: './das-dashboard-core.component.html',
  styleUrls: ['./das-dashboard-core.component.scss'],
  providers: [ConfirmationService]
})

export class DasDashboardCoreComponent implements OnInit {
  @Input() defaultWidgetOptions: DasWidgetOption[] = [];

  widgetOptions: DasWidgetOption[] = [];

  gridsterOptions: any = _.cloneDeep(GRIDSTER_OPTIONS);

  @ViewChild('gridsterComponent', { static: true }) gridsterComponent: GridsterComponent;

  private readonly localStorageWidgetOptionsKey;

  constructor(
    public readonly dashboardCoreService: DasDashboardCoreService,
    private readonly confirmationService: ConfirmationService,
    private readonly dasConfig: DasConfig,
    private readonly dasLocalStorage: DasLocalStorageService,
    private readonly toastService: DasToastService,
  ) {
    this.gridsterOptions.itemResizeCallback = this.itemResizeCallback;
    this.localStorageWidgetOptionsKey = this.dasConfig.localStorageWidgetOptionsKey;
  }


  ngOnInit() {
    this.getSetting();
    this.dashboardCoreService.widgetOptions = this.widgetOptions;
  }

  itemResizeCallback = (gridsterItem: any, _gridsterItemComponent: any) => {
    this.dashboardCoreService.emitWidgetResized(gridsterItem);
  };


  showHideDashboardSetting() {
    this.dashboardCoreService.isSettingVisible = !this.dashboardCoreService.isSettingVisible;
  }


  saveSetting() {
    this.dasLocalStorage.setItem(this.localStorageWidgetOptionsKey, this.dashboardCoreService.widgetOptions);
    this.toastService.showSuccess('Dashboard settings saved into browser local storage.');
  }

  removeAll() {
    this.confirmationService.confirm({
      message: 'Do you want to remove all widgets?',
      header: 'Remove All',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.widgetOptions.length = 0;
        this.toastService.showSuccess('All widget has been removed.');
      }

    });
  }


  resetSetting(isShowConfirmation = true) {
    if (!isShowConfirmation) {
      this.setToDefault();
      return;
    }

    this.confirmationService.confirm({
      message: 'Do you want to reset the dashboard to default?',
      header: 'Reset',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.setToDefault();
      }

    });
  }

  private readonly setToDefault=()=>{
    this.dasLocalStorage.removeItem(this.localStorageWidgetOptionsKey);
    this.widgetOptions.length = 0;
    this.widgetOptions.push(...(_.cloneDeep(this.defaultWidgetOptions)));
  }

  dropped($event: any) {
    const componentType =
      this.dashboardCoreService.widgetMap.get($event.item.data.key);

    if (!componentType) return;

    const originalWidgetOptions = _.cloneDeep(this.widgetOptions);
    this.widgetOptions.length = 0;

    this.widgetOptions.push(
      new DasWidgetOption({
        widgetClassName: $event.item.data.key.toString(),
        title: $event.item.data.value.name,
        'x': 0,
        'y': 0,
        cols: $event.item.data.value.cols,
        rows: $event.item.data.value.rows,
        id: 0
      }));

    for (let i = 0; i < originalWidgetOptions.length; i++) {
      const widgetOption = originalWidgetOptions[i];
      widgetOption.id = i + 1;
      this.widgetOptions.push(widgetOption);
    }
  }

  private getSetting() {
    const savedWidgetOptions = this.dasLocalStorage.getItem(this.localStorageWidgetOptionsKey);

    if (isArray(savedWidgetOptions)) {
      this.widgetOptions = savedWidgetOptions;
      return;
    }
    this.resetSetting(false);


  }


}

