import { Component, Input } from '@angular/core';
import { DasDashboardService } from '../services/das-dashboard.service';

@Component({
  selector: 'das-dashboard-setting',
  templateUrl: './das-dashboard-setting.component.html',
  styleUrls: ['./das-dashboard-setting.component.scss']
})
export class DasDashboardSettingComponent {


  constructor(public readonly dashboardService:DasDashboardService) {
  }

  save(){
    this.hide();
  }

  hide(){
    this.dashboardService.isSettingVisible = false;
  }
}
