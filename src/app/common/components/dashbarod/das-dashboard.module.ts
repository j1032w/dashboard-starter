import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DasDashboardSettingComponent } from './setting/das-dashboard-setting.component';


@NgModule({
  declarations: [
    DasDashboardComponent,
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
    DasDashboardComponent
  ]
})
export class DasDashboardModule {
}
