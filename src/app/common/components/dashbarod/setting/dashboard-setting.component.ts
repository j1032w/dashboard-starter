import { Component, Input } from '@angular/core';
import { DasDashboardService } from '../services/das-dashboard.service';

@Component({
  selector: 'das-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.scss']
})
export class DashboardSettingComponent {


  constructor(public readonly dashboardService:DasDashboardService) {
  }

  save(){
    this.hide();
  }

  hide(){
    this.dashboardService.isSettingVisible = false;
  }
}
