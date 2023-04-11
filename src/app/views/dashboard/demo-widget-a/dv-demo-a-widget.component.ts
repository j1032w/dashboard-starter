import { Component, Input } from '@angular/core';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';

@Component({
  selector: 'das-dv-demo-a-widget',
  templateUrl: './dv-demo-a-widget.component.html',
  styleUrls: ['./dv-demo-a-widget.component.scss']
})
export class DvDemoAWidgetComponent extends DasWidgetCoreBase {
  @Input() frontText = 'A';
  @Input() backText = 'A Back';

  constructor() {
    super();
  }

}
