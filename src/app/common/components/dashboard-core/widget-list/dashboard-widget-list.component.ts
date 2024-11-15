import { CDK_DRAG_CONFIG, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { DasDashboardCoreEventService } from '../services/das-dashboard-core-event.service';
import { DialogModule } from 'primeng/dialog';
import { NgScrollbar } from 'ngx-scrollbar';
import { NgFor } from '@angular/common';
import { CamelCasePipe } from '../../../pipes/camel-case.pipe';
import { DefaultOrderKeyValuePipe } from '../../../pipes/default-order-key-value.pipe ';

@Component({
    selector: 'das-dashboard-widget-list',
    templateUrl: './dashboard-widget-list.component.html',
    styleUrls: ['./dashboard-widget-list.component.scss'],
    providers: [{ provide: CDK_DRAG_CONFIG, useValue: { zIndex: 2000 } }],
    standalone: true,
    imports: [DialogModule, NgScrollbar, CdkDropList, NgFor, CdkDrag, CamelCasePipe, DefaultOrderKeyValuePipe]
})
export class DashboardWidgetListComponent {
  constructor(public readonly dashboardService: DasDashboardCoreEventService) {}
}
