import { Component } from '@angular/core';
import { DasComponentBase } from '../../../components/das-component-base.component';

@Component({
  selector: 'das-comp-grid',
  templateUrl: './comp-grid.component.html',
  styleUrls: ['./comp-grid.component.scss']
})
export class CompGridComponent extends DasComponentBase {
  constructor() {
    super();
  }


}
