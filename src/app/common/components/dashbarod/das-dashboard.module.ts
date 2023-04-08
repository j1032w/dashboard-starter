import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DashboardWidgetDynamicLoaderDirective } from './directives/dashboard-widget-dynamic-loader.directive';
import { DasDashboardWidgetBase } from './services/das-dashboard-widget-base';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { DashboardWidgetComponent } from './widget/dashboard-widget.component';
import { DasDashboardWidgetSettingComponent } from './widget/widget-setting/das-dashboard-widget-setting.component';



@NgModule({
  declarations: [
    DasDashboardComponent,
    DashboardSettingComponent,
    DashboardWidgetDynamicLoaderDirective,
    DashboardWidgetComponent,
    DasDashboardWidgetBase,
    DasDashboardWidgetSettingComponent
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
