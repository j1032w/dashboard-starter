import { ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DasWidgetOption } from '../services/dasWidgetOption';


@Directive({
  selector: '[das-dashboard-widget-dynamic-loader]'
})
export class DashboardWidgetDynamicLoaderDirective implements OnInit, OnDestroy {
  @Input() widgetOption: DasWidgetOption;


  private componentRef: ComponentRef<any>;

  constructor(private readonly viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    // Since Angular v13, ComponentFactory and ComponentFactoryResolver were deprecated.
    // https://angular.io/api/core/ComponentFactoryResolver
    this.viewContainerRef.clear();
    const component =
      this.viewContainerRef.createComponent(this.widgetOption.widgetComponentClass);
    // @ts-ignore
    component.setInput('widgetOption', this.widgetOption);

    // @ts-ignore
    component.instance.widgetConfig = this.widgetOption;
    component.changeDetectorRef.detectChanges();

    this.componentRef = component;
  }

  ngOnDestroy(): void {
    this.viewContainerRef?.clear();
  }


}
