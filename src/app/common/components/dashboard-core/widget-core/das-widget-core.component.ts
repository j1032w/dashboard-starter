import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { flipInY } from 'ng-animate';
import { delay, of } from 'rxjs';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-core',
  templateUrl: './das-widget-core.component.html',
  styleUrls: ['./das-widget-core.component.scss'],
  animations: [
    trigger('flip', [
      state(
        'shown',
        style({
          transform: 'rotate(0)',
          backgroundColor: 'white'
        })
      ),
      state(
        'hidden',
        style({
          transform: 'rotateY(90deg)',
          border: '1px solid gray',
          margin: '2px',
          backgroundColor: '#e9ecef' // $gray-200
        })
      ),

      transition('hidden => shown', useAnimation(flipInY, { params: { timing: 2 } })),
      transition('shown => hidden', useAnimation(flipInY, { params: { timing: 2 } }))
    ])
  ]
})
export class DasWidgetCoreComponent {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;
  @ContentChild('settingTemplate') settingTemplate: TemplateRef<any>;

  isSettingVisible = false;

  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }



  flip() {
    this.widgetOption.isFrontShown = !this.widgetOption.isFrontShown;

    // wait for the animation to complete
    of().pipe(delay(2000)).subscribe(() => {
      this.dashboardService.emitWidgetResized(this.widgetOption);
    });


  }


  showSettingModal() {
    this.widgetOption.isSettingModalVisible = true;
  }


}
