import {Component} from '@angular/core';
import {DasComponentBase} from '../../common/components/das-component-base.component';


@Component({
  selector: 'das-header',
  templateUrl: './das-header.component.html',
  styleUrls: ['./das-header.component.scss'],

})
export class DasHeaderComponent extends DasComponentBase {
  menus: any[] = [];

  constructor() {
    super();

  }


}
