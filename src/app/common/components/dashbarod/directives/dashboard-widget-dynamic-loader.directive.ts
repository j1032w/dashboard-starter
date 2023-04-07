import { ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DasWidgetConfig } from '../services/dasWidgetConfig';


@Directive({
  selector: '[das-dashboard-widget-dynamic-loader]'
})
export class DashboardWidgetDynamicLoaderDirective implements OnInit, OnDestroy {
  @Input() widgetConfig: DasWidgetConfig;


  private componentRef: ComponentRef<any>;

  constructor(private readonly viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    // Since Angular v13, ComponentFactory and ComponentFactoryResolver were deprecated.
    // https://angular.io/api/core/ComponentFactoryResolver
    this.viewContainerRef.clear();
    const component =
      this.viewContainerRef.createComponent(this.widgetConfig.widgetComponentClass);
    // @ts-ignore
    component.setInput('widgetConfig', this.widgetConfig);

    // @ts-ignore
    component.instance.widgetConfig = this.widgetConfig;
    component.changeDetectorRef.detectChanges();

    this.componentRef = component;
  }

  ngOnDestroy(): void {
    this.viewContainerRef?.clear();
  }


}
