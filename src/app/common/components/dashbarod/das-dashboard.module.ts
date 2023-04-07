import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DasDashboardWidgetBase } from './services/das-dashboard-widget-base';
import { DashboardSettingComponent } from './setting/dashboard-setting.component';
import { DashboardWidgetDynamicLoaderComponent } from './widget-dynamic-loader/dashboard-widget-dynamic-loader.component';
import { DashboardWidgetComponent } from './widget/dashboard-widget.component';


@NgModule({
  declarations: [
    DasDashboardComponent,
    DashboardSettingComponent,
    DashboardWidgetDynamicLoaderComponent,
    DashboardWidgetComponent,
    DasDashboardWidgetBase
  ],


  imports: [
    DasCommonModule,
    GridsterModule,
    CdkDrag,
    CdkDragHandle,
    DynamicModule
  ],

  exports: [
    DasDashboardComponent,
    DashboardWidgetComponent
  ]
})
export class DasDashboardModule {
}
