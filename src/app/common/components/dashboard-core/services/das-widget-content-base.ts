import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { debounce, filter, takeUntil, timer } from 'rxjs';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreService } from './das-dashboard-core.service';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetOption } from './das-widget-option';

@Component({
  template: ''
})
export class DasWidgetContentBase extends DasComponentBase implements OnInit{
  @Input() widgetOption: DasWidgetOption;


  constructor(protected readonly elementRef: ElementRef,
              protected readonly dashboardCoreService: DasDashboardCoreService) {
    super();
  }

  ngOnInit() {
    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetResized
        ),
        debounce(()=>timer(300))
      )
      .subscribe(() => {
        this.repaint();
      });

  }
  readonly repaint = () => {
    setTimeout(() => {
      // check if the element is visible
      if (this.elementRef.nativeElement.offsetParent !== null) {
        this.repaintComponent();
      }
    });
  };

  // override this method in the child component
  protected readonly repaintComponent = () => {

  };

}
