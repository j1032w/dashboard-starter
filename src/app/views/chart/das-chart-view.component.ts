import { Component } from '@angular/core';
import { DasChartSp500Component } from '../common/sp500-chart/das-chart-sp500.component';

@Component({
    selector: 'das-chart-view',
    templateUrl: './das-chart-view.component.html',
    styleUrls: ['./das-chart-view.component.scss'],
    standalone: true,
    imports: [DasChartSp500Component]
})
export class DasChartViewComponent {}
