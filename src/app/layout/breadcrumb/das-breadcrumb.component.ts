import { Component } from '@angular/core';

import { DasBaseComponent } from '../../common/components/das-component-base.component';
import { BreadcrumbService } from './services/breadcrumb.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'das-breadcrumb',
    templateUrl: './das-breadcrumb.component.html',
    styleUrls: ['./das-breadcrumb.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, RouterLink, FeatherModule]
})
export class DasBreadcrumbComponent extends DasBaseComponent {
  constructor(public readonly breadcrumbService: BreadcrumbService) {
    super();
  }
}
