import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevExtremeModule, DxButtonModule } from 'devextreme-angular';
import { DasChartMainComponent } from './das-chart-main.component';


@NgModule({
  declarations: [DasChartMainComponent],
  imports: [
    CommonModule,
    DxButtonModule,
    DevExtremeModule

  ],
  exports: [
    DasChartMainComponent
  ],
  providers: []
})
export class DasChartViewModule {
}
