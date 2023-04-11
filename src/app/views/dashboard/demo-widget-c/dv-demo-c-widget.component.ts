import { Component } from '@angular/core';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';

@Component({
  selector: 'das-dv-demo-c-widget',
  templateUrl: './dv-demo-c-widget.component.html',
  styleUrls: ['./dv-demo-c-widget.component.scss']
})
export class DvDemoCWidgetComponent extends DasWidgetCoreBase {
  constructor() {
    super();
  }

}
