import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent } from 'angular-gridster2';
import * as _ from 'lodash';
import { isArray } from 'lodash';
import { ConfirmationService } from 'primeng/api';
import { filter, takeUntil } from 'rxjs';
import { DasConfig } from '../../services/das-config';
import { DasLocalStorageService } from '../../services/das-local-storage.service';
import { DasToastService } from '../../services/das-toast.service';
import { DasComponentBase } from '../das-component-base.component';

import { GRIDSTER_OPTIONS } from './services/das-dashboard-constant';
import { DasDashboardCoreEventService } from './services/das-dashboard-core-event.service';
import { DasDashboardEventTypeEnum } from './services/das-dashboard-message';
import { DasWidgetOption } from './services/das-widget-option';


@Component({
  selector: 'das-dashboard-core',
  templateUrl: './das-dashboard-core.component.html',
  styleUrls: ['./das-dashboard-core.component.scss'],
  providers: [ConfirmationService]
})

export class DasDashboardCoreComponent extends DasComponentBase implements OnInit {
  @Input() defaultWidgetOptions: DasWidgetOption[] = [];

  widgetOptions: DasWidgetOption[] = [];

  gridsterOptions: any = _.cloneDeep(GRIDSTER_OPTIONS);

  @ViewChild('gridsterComponent', { static: true }) gridsterComponent: GridsterComponent;

  private readonly localStorageWidgetOptionsKey;

  constructor(
    public readonly dashboardCoreService: DasDashboardCoreEventService,
    private readonly confirmationService: ConfirmationService,
    private readonly dasConfig: DasConfig,
    private readonly dasLocalStorage: DasLocalStorageService,
    private readonly toastService: DasToastService
  ) {
    super();
    this.localStorageWidgetOptionsKey = this.dasConfig.localStorageWidgetOptionsKey;
  }


  ngOnInit() {
    this.getSetting();
    this.dashboardCoreService.widgetOptions = this.widgetOptions;

    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.destroyed$),
        filter(event => event.eventType === DasDashboardEventTypeEnum.Resized)
      )
      .subscribe((event) => {
        // Waiting for animation to complete, and then force gridster to recalculate the size
        setTimeout(this.gridsterComponent.optionsChanged, 500);

      });
  }




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

  private readonly setToDefault = () => {
    this.dasLocalStorage.removeItem(this.localStorageWidgetOptionsKey);
    this.widgetOptions.length = 0;
    this.widgetOptions.push(...(_.cloneDeep(this.defaultWidgetOptions)));
  };

  dropped($event: any) {
    const componentType =
      this.dashboardCoreService.widgetMap.get($event.item.data.key);

    if (!componentType) return;


    const maxId = _.maxBy(this.widgetOptions, 'id')?.id ?? 0;
    this.widgetOptions.push(
      new DasWidgetOption({
        widgetClassName: $event.item.data.key.toString(),
        title: $event.item.data.value.name,
        x: 0,
        y: 0,
        cols: $event.item.data.value.cols,
        rows: $event.item.data.value.rows,
        id: maxId + 1,
        isShowFlipButton: $event.item.data.value.isShowFlipButton
      }));

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

