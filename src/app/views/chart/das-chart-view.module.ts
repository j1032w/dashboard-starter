import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { DasViewCommonModule } from '../common/das-view-common.module';
import { DasChartViewComponent } from './das-chart-view.component';

@NgModule({
    imports: [CommonModule, DasViewCommonModule, DasChartViewComponent],
    exports: [DasChartViewComponent],
    providers: []
})
export class DasChartViewModule {}
