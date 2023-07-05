import { Injectable } from '@angular/core';

import { DasDashboardCoreEventService } from '../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasLayout } from './dasLayout';

@Injectable({ providedIn: 'root' })
export class DasLayoutService {
  layout = new DasLayout();

  constructor(private readonly dashboardCoreService: DasDashboardCoreEventService) {}

  toggleSidebar() {
    this.layout.isShowSidebar = !this.layout.isShowSidebar;
    this.dashboardCoreService.emitResized();
  }
}
