import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { flipInX } from 'ng-animate';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-core',
  templateUrl: './das-widget-core.component.html',
  styleUrls: ['./das-widget-core.component.scss'],
  animations: [

    trigger('flip', [
      transition(
        'front <=> back', [

          animate(
            '0.0001s',
            style({
              backgroundColor: '#f8f9fa', // $gray-100
              margin: '2px',
              border: '1px solid gray'
            })
          ),

          useAnimation(flipInX, { params: { timing: 1 } })
        ]
      )

    ])
  ]
})
export class DasWidgetCoreComponent {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();


  isSettingVisible = false;

  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }

  flip() {
    this.widgetOption.isShowFront = !this.widgetOption.isShowFront;
  }

  showSettingModal() {
    this.isSettingVisible = true;
  }


}
