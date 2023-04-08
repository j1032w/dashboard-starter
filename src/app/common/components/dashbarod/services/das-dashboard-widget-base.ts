import { Component, Input } from '@angular/core';
import { DasWidgetOption } from './dasWidgetOption';

@Component({
  template:''
})
export class DasDashboardWidgetBase{
  @Input() widgetOption: DasWidgetOption;
}
