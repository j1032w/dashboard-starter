import { Component } from '@angular/core';
import { DasChartViewService } from '../../../views/chart/das-chart-view.service';

@Component({
  selector: 'das-sidebar-chart-setting',
  templateUrl: './sidebar-chart-setting.component.html',
  styleUrls: ['./sidebar-chart-setting.component.scss']
})
export class SidebarChartSettingComponent {

  constructor(public readonly chartService: DasChartViewService) {
  }
}
