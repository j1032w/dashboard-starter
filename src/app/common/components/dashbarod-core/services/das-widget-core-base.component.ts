import { Component, Input } from '@angular/core';
import { DasComponentBase } from '../../das-component-base.component';
import { DasWidgetOption } from './das-widget-option';


@Component({
  template: ''
})
export class DasWidgetCoreBase extends DasComponentBase {
  @Input() widgetOption: DasWidgetOption;
}
