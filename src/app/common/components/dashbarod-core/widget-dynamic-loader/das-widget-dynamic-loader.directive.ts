import { ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetBase } from '../services/das-widget-base.component';
import { DasWidgetOption } from '../services/das-widget-option';


@Directive({
  selector: '[das-widget-dynamic-loader]'
})
export class DasWidgetDynamicLoaderDirective implements OnInit, OnDestroy {
  @Input() widgetOption: DasWidgetOption;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly dashboardCoreService: DasDashboardCoreService
  ) {
  }

  ngOnInit(): void {
    this.viewContainerRef.clear();


    // Though since Angular v13, ComponentFactory and ComponentFactoryResolver were deprecated.
    // https://angular.io/api/core/ComponentFactoryResolver
    const componentType =
      this.dashboardCoreService.widgetMap.get(this.widgetOption.widgetClassName);

    if (!componentType) {
      return;
    }

    const component: ComponentRef<DasWidgetBase> = this.viewContainerRef.createComponent(componentType);
    component.setInput('widgetOption', this.widgetOption);

  }

  ngOnDestroy(): void {
    this.viewContainerRef?.clear();
  }


}
