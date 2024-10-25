import { CdkDrag, CdkDragHandle, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { DasCommonModule } from '../../das-common.module';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DasWidgetSettingCoreComponent } from './das-widget-setting/das-widget-setting-core.component';
import { DasWidgetBaseComponent } from './services/das-widget-base.component';
import { DasWidgetContentBaseComponent } from './services/das-widget-content-base.component';
import { DasWidgetSettingBaseComponent } from './services/das-widget-setting-base.component';
import { DasWidgetCoreComponent } from './widget-core/das-widget-core.component';
import { DasWidgetDynamicLoaderDirective } from './widget-dynamic-loader/das-widget-dynamic-loader.directive';
import { DashboardWidgetListComponent } from './widget-list/dashboard-widget-list.component';

@NgModule({
  declarations: [
    DasDashboardCoreComponent,
    DashboardWidgetListComponent,
    DasWidgetBaseComponent,
    DasWidgetContentBaseComponent,
    DasWidgetCoreComponent,
    DasWidgetDynamicLoaderDirective,
    DasWidgetSettingCoreComponent,
    DasWidgetSettingBaseComponent
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
    DasWidgetDynamicLoaderDirective,
    DasDashboardCoreComponent,
    DasWidgetCoreComponent,
    DasWidgetSettingCoreComponent,
    DasWidgetContentBaseComponent,
    DasWidgetSettingBaseComponent
  ]
})
export class DasDashboardCoreModule {}
