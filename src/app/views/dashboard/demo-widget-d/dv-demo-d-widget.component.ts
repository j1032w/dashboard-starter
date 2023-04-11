import { Component } from '@angular/core';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';

@Component({
  selector: 'das-dv-demo-d-widget',
  templateUrl: './dv-demo-d-widget.component.html',
  styleUrls: ['./dv-demo-d-widget.component.scss']
})
export class DvDemoDWidgetComponent extends DasWidgetCoreBase {
  constructor() {
    super();
  }

}
