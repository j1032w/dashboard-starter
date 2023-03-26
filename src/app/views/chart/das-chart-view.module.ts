import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { DasChartMainComponent } from './das-chart-main.component';



@NgModule({
  declarations: [DasChartMainComponent],
  imports: [
    CommonModule,
    DxButtonModule

  ],
  exports: [
    DasChartMainComponent
  ],
  providers: []
})
export class DasChartViewModule {
}
