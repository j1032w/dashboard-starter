import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DasWidgetComponent } from './widget/das-widget.component';
import { DasDashboardSettingComponent } from './setting/das-dashboard-setting.component';


@NgModule({
  declarations: [
    DasDashboardComponent,
    DasWidgetComponent,
    DasDashboardSettingComponent
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
    DasWidgetComponent
  ]
})
export class DasDashboardModule {
}
