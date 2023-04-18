import { CdkDrag, CdkDragHandle, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DasWidgetSettingComponent } from './das-widget-setting/das-widget-setting.component';


import { DasWidgetBase } from './services/das-widget-base.component';
import { DasWidgetContentBase } from './services/das-widget-content-base';
import { DasWidgetCoreComponent } from './widget-core/das-widget-core.component';
import { DasWidgetDynamicLoaderDirective } from './widget-dynamic-loader/das-widget-dynamic-loader.directive';
import { DashboardWidgetListComponent } from './widget-list/dashboard-widget-list.component';


@NgModule({
  declarations: [
    DasDashboardCoreComponent,
    DashboardWidgetListComponent,
    DasWidgetBase,
    DasWidgetContentBase,
    DasWidgetCoreComponent,
    DasWidgetDynamicLoaderDirective,
    DasWidgetSettingComponent
  ],


  imports: [
    DasCommonModule,
    GridsterModule,
    CdkDrag,
    CdkDragHandle,
    CdkDropList,
    CdkDropListGroup,
    ConfirmDialogModule

  ],

  exports: [
    DasDashboardCoreComponent,
    DasWidgetCoreComponent,
    DasWidgetSettingComponent,
    DasWidgetContentBase
  ]
})
export class DasDashboardCoreModule {
}
