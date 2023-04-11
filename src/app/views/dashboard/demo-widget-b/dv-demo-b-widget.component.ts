import { Component } from '@angular/core';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';

@Component({
  selector: 'das-dv-demo-b-widget',
  templateUrl: './dv-demo-b-widget.component.html',
  styleUrls: ['./dv-demo-b-widget.component.scss']
})
export class DvDemoBWidgetComponent extends DasWidgetCoreBase {
  constructor() {
    super();
  }

}
