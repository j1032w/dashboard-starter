import { CdkAccordionItem } from '@angular/cdk/accordion';
import { Component } from '@angular/core';
import { matExpansionAnimations } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { DasComponentBase } from '../../common/components/das-component-base.component';

import { DasSidebarItem, SidebarItemTypeEnum } from './services/das-sidebar-item';
import { DasSidebarService } from './services/das-sidebar.service';


@Component({
  selector: 'das-sidebar',
  templateUrl: './das-sidebar.component.html',
  styleUrls: ['./das-sidebar.component.scss'],
  animations: [
    matExpansionAnimations.bodyExpansion
  ]
})
export class DasSidebarComponent extends DasComponentBase {

  sidebarItemTypeEnum = SidebarItemTypeEnum;


  constructor(
    public readonly sidebarService: DasSidebarService,
    public readonly router: Router
  ) {
    super();
  }


  toggleAccordionItem(accordionItemComponent: CdkAccordionItem, sidebarItem: DasSidebarItem) {
    // Menu item itself doesn't trigger navigation
    if (sidebarItem.type !== SidebarItemTypeEnum.WithChildTemplate) {
      accordionItemComponent.toggle();
      return;
    }

    if (this.router.url !== sidebarItem.path) {
      sidebarItem.expanded = true;
      this.router.navigate([sidebarItem.path]).then();
    } else {
      sidebarItem.expanded = !sidebarItem.expanded;
    }

  }


}
