import { Component } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';

import { BreadcrumbService } from './services/breadcrumb.service';


@Component({
  selector: 'das-breadcrumb',
  templateUrl: './das-breadcrumb.component.html',
  styleUrls: ['./das-breadcrumb.component.scss']
})
export class DasBreadcrumbComponent extends DasComponentBase {

  constructor(public readonly breadcrumbService: BreadcrumbService) {
    super();


  }


}
