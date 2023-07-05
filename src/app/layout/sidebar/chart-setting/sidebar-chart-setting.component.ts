import { Component } from '@angular/core';

import { DasChartSp500Service } from '../../../views/common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-sidebar-chart-setting',
  templateUrl: './sidebar-chart-setting.component.html',
  styleUrls: ['./sidebar-chart-setting.component.scss']
})
export class SidebarChartSettingComponent {
  constructor(public readonly chartService: DasChartSp500Service) {}
}
