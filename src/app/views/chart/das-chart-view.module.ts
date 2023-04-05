import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevExtremeModule, DxButtonModule } from 'devextreme-angular';
import { DasChartViewComponent } from './das-chart-view.component';


@NgModule({
  declarations: [DasChartViewComponent],
  imports: [
    CommonModule,
    DxButtonModule,
    DevExtremeModule

  ],
  exports: [
    DasChartViewComponent
  ],
  providers: []
})
export class DasChartViewModule {
}
