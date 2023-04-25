import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {Component, ContentChild, ElementRef, Input, TemplateRef} from '@angular/core';
import {ResizedEvent} from 'angular-resize-event';
import {flipInY} from 'ng-animate';
import {interval, take, takeUntil} from 'rxjs';
import {DasComponentBase} from '../../das-component-base.component';
import {DasDashboardCoreEventService} from '../services/das-dashboard-core-event.service';
import {DasWidgetOption} from '../services/das-widget-option';


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

      transition('hidden => shown', useAnimation(flipInY, {params: {timing: 2}})),
      transition('shown => hidden', useAnimation(flipInY, {params: {timing: 2}}))
    ])
  ]
})
export class DasWidgetCoreComponent extends DasComponentBase {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;
  @ContentChild('settingTemplate') settingTemplate: TemplateRef<any>;

  isSettingVisible = false;

  height = '400px';
  width = '400px';

  isContentHidden = false;


  constructor(
    public readonly dashboardEventService: DasDashboardCoreEventService,
    private readonly elementRef: ElementRef
  ) {
    super();
  }


  private setDimension($event: ResizedEvent) {
    this.isContentHidden = true;
    setTimeout(() => {
      if (this.elementRef.nativeElement.offsetWidth && this.elementRef.nativeElement.offsetHeight) {
        this.width = `${this.elementRef.nativeElement.offsetWidth}px`;
        this.height = `${this.elementRef.nativeElement.offsetHeight}px`;
        this.dashboardEventService.emitWidgetResized(this.widgetOption);
      }

      this.isContentHidden = false;
    });
  }


  flip() {
    this.widgetOption.isFrontShown = !this.widgetOption.isFrontShown;

    // wait for the animation to complete
    interval(2000).pipe(
      takeUntil(this.destroyed$),
      take(1)
    )
      .subscribe(() => {
        // this.dashboardEventService.emitWidgetResized(this.widgetOption);
      });


  }


  showSettingModal() {
    this.widgetOption.isSettingModalVisible = true;
  }


}
