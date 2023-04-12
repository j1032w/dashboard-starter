import { CdkDrag, CdkDragHandle, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DasWidgetSettingComponent } from './das-widget-setting/das-widget-setting.component';


import { DasWidgetCoreBase } from './services/das-widget-core-base.component';
import { DasWidgetCoreComponent } from './widget-core/das-widget-core.component';
import { DasWidgetDynamicLoaderDirective } from './widget-dynamic-loader/das-widget-dynamic-loader.directive';
import { DashboardWidgetListComponent } from './widget-list/dashboard-widget-list.component';


@NgModule({
  declarations: [
    DasDashboardCoreComponent,
    DashboardWidgetListComponent,
    DasWidgetDynamicLoaderDirective,
    DasWidgetCoreComponent,
    DasWidgetCoreBase,
    DasWidgetSettingComponent
  ],


  imports: [
    DasCommonModule,
    GridsterModule,
    CdkDrag,
    CdkDragHandle,
    CdkDropList,
    CdkDropListGroup

  ],

  exports: [
    DasDashboardCoreComponent,
    DasWidgetCoreComponent,
    DasWidgetSettingComponent
  ]
})
export class DasDashboardCoreModule {
}
