import { CdkAccordionItem } from '@angular/cdk/accordion';
import { Component } from '@angular/core';
import { matExpansionAnimations } from '@angular/material/expansion';

import { DasComponentBase } from '../../components/das-component-base.component';
import { DasSidebarItem } from './services/das-sidebar-item';
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


  constructor(
    public readonly sidebarService: DasSidebarService
  ) {
    super();
  }


  toggleAccordionItem(accordionItemComponent: CdkAccordionItem, sidebarItem: DasSidebarItem) {
    accordionItemComponent.toggle();
    sidebarItem.expanded = !sidebarItem.expanded;
  }


}
