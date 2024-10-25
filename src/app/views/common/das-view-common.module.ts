import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {BaseChartDirective} from 'ng2-charts';


import { DasCommonModule } from '../../common/das-common.module';
import { DasChartSp500Component } from './sp500-chart/das-chart-sp500.component';

@NgModule({
  declarations: [DasChartSp500Component],
  imports: [CommonModule, DasCommonModule, BaseChartDirective],
  exports: [DasChartSp500Component],
  providers: []
})
export class DasViewCommonModule {}
