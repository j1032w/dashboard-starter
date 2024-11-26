import { Component } from '@angular/core';

import { DasChartSp500Service } from '../../../views/common/sp500-chart/das-chart-sp500.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'das-sidebar-chart-setting',
    templateUrl: './sidebar-chart-setting.component.html',
    styleUrls: ['./sidebar-chart-setting.component.scss'],
    standalone: true,
    imports: [InputSwitchModule, FormsModule]
})
export class SidebarChartSettingComponent {
  constructor(public readonly chartService: DasChartSp500Service) {}
}
