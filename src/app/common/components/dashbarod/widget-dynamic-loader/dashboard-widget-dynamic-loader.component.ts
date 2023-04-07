import { Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DasWidgetConfig } from '../services/dasWidgetConfig';


@Component({
  selector: 'das-dashboard-widget-dynamic-loader',
  templateUrl: './dashboard-widget-dynamic-loader.component.html'
})
export class DashboardWidgetDynamicLoaderComponent implements OnInit, OnDestroy {
  @Input() widgetConfig: DasWidgetConfig;

  @ViewChild('widgetContainer', { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef;


  private componentRef: ComponentRef<any>;


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
