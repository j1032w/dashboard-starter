import { Component, Input } from '@angular/core';
import { DasWidgetConfig } from './dasWidgetConfig';

@Component({
  template:''
})
export class DasDashboardWidgetBase{
  @Input() widgetConfig: DasWidgetConfig;
}
