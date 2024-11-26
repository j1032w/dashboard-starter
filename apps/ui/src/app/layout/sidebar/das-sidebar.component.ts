import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { Component } from '@angular/core';
import { matExpansionAnimations } from '@angular/material/expansion';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { DasBaseComponent } from '../../common/components/das-component-base.component';
import { DasCommonComponentModule } from '../../common/das-common-component.module';
import { SidebarChartSettingComponent } from './chart-setting/sidebar-chart-setting.component';
import { DasSidebarItem, SidebarItemTypeEnum } from './services/das-sidebar-item';
import { DasSidebarService } from './services/das-sidebar.service';

@Component({
  selector: 'das-sidebar',
  templateUrl: './das-sidebar.component.html',
  styleUrls: ['./das-sidebar.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
  standalone: true,
  imports: [
    NgScrollbar,
    CdkAccordion,
    CdkAccordionItem,
    RouterLinkActive,
    RouterLink,
    SidebarChartSettingComponent,
    DasCommonComponentModule
  ]
})
export class DasSidebarComponent extends DasBaseComponent {
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
