import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DasBaseComponent } from '../../common/components/das-component-base.component';
import { DasCommonComponentModule } from '../../common/das-common-component.module';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'das-breadcrumb',
  templateUrl: './das-breadcrumb.component.html',
  styleUrls: ['./das-breadcrumb.component.scss'],
  standalone: true,
  imports: [RouterLink, DasCommonComponentModule]
})
export class DasBreadcrumbComponent extends DasBaseComponent {
  constructor(public readonly breadcrumbService: BreadcrumbService) {
    super();
  }
}
