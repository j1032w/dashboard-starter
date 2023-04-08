import { Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DasWidgetOption } from '../services/das-widget-option';


@Directive({
  selector: '[das-dashboard-widget-dynamic-loader]'
})
export class DashboardWidgetDynamicLoaderDirective implements OnInit, OnDestroy {
  @Input() widgetOption: DasWidgetOption;


  constructor(private readonly viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    // Since Angular v13, ComponentFactory and ComponentFactoryResolver were deprecated.
    // https://angular.io/api/core/ComponentFactoryResolver
    this.viewContainerRef.clear();
    if (!this.widgetOption.widgetComponentClass) {
      return;
    }

    const component =
      this.viewContainerRef.createComponent(this.widgetOption.widgetComponentClass);
    component.setInput('widgetOption', this.widgetOption);

  }

  ngOnDestroy(): void {
    this.viewContainerRef?.clear();
  }


}
