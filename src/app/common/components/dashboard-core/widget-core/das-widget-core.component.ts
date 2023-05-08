import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { flipInY } from 'ng-animate';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreEventService } from '../services/das-dashboard-core-event.service';
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
export class DasWidgetCoreComponent extends DasComponentBase {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;
  @ContentChild('settingTemplate') settingTemplate: TemplateRef<any>;

  isToolbarHidden = true;
  isSettingVisible = false;

  height = '400px';
  width = '400px';


  constructor(
    public readonly dashboardEventService: DasDashboardCoreEventService,
    private readonly elementRef: ElementRef
  ) {
    super();
  }


  flip() {
    this.widgetOption.isFrontShown = !this.widgetOption.isFrontShown;
  }


  showSettingModal() {
    this.widgetOption.isSettingModalVisible = true;
  }


  protected readonly onmouseenter = onmouseenter;


}
