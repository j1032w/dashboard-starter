import { CdkDrag, CdkDragHandle, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DashboardWidgetListComponent } from './widget-list/dashboard-widget-list.component';
import { DasWidgetDynamicLoaderDirective } from './widget-dynamic-loader/das-widget-dynamic-loader.directive';
import { DasWidgetCoreBase } from './services/das-widget-core-base.component';
import { DasWidgetCoreComponent } from './widget-core/das-widget-core.component';


@NgModule({
  declarations: [
    DasDashboardCoreComponent,
    DashboardWidgetListComponent,
    DasWidgetDynamicLoaderDirective,
    DasWidgetCoreComponent,
    DasWidgetCoreBase
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
    DasWidgetCoreComponent
  ]
})
export class DasDashboardCoreModule {
}
