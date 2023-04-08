import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DialogModule } from 'primeng/dialog';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { DashboardWidgetDynamicLoaderDirective } from './dynamic-loader/dashboard-widget-dynamic-loader.directive';
import { DasWidgetCoreBase } from './services/das-widget-core-base.component';
import { DasWidgetCoreComponent } from './widget-core/das-widget-core.component';
import { DasWidgetCoreSettingComponent } from './widget-core/widget-setting/das-widget-core-setting.component';


@NgModule({
  declarations: [
    DasDashboardCoreComponent,
    DashboardSettingComponent,
    DashboardWidgetDynamicLoaderDirective,
    DasWidgetCoreComponent,
    DasWidgetCoreBase,
    DasWidgetCoreSettingComponent
  ],


  imports: [
    DasCommonModule,
    GridsterModule,
    CdkDrag,
    CdkDragHandle,
    DialogModule
  ],

  exports: [
    DasDashboardCoreComponent,
    DasWidgetCoreComponent
  ]
})
export class DasDashboardCoreModule {
}
