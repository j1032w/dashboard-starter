import { Component, Input } from '@angular/core';
import { DasWidgetOption } from '../../../common/components/dashbarod-core/services/das-widget-option';

@Component({
  selector: 'das-dv-demo-widget',
  templateUrl: './dv-demo-widget.component.html',
  styleUrls: ['./dv-demo-widget.component.scss']
})
export class DvDemoWidgetComponent {
  @Input() widgetOption: DasWidgetOption;
}
