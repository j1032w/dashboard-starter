import { Component, Input } from '@angular/core';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';

@Component({
  selector: 'das-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.scss']
})
export class DashboardSettingComponent {


  constructor(public readonly dashboardService:DasDashboardCoreService) {
  }

  save(){
    this.hide();
  }

  hide(){
    this.dashboardService.isSettingVisible = false;
  }
}
