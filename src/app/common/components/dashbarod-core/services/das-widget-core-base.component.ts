import { Component, Input } from '@angular/core';
import { DasWidgetOption } from './das-widget-option';


@Component({
  template:''
})
export class DasWidgetCoreBase {
  @Input() widgetOption: DasWidgetOption;
}
