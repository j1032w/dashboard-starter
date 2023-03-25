import { CdkDrag, CdkDragPlaceholder, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';

import { DasUserInterfaceComponent } from './user-interface.component';
import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';


@NgModule({
  declarations: [
    DasUserInterfaceComponent,
    UiAnimationComponent,
    UiDragDropComponent,
    UiVirtualScrollComponent,
    UiResponsiveComponent

  ],
  imports: [
    CommonModule,
    DasUserInterfaceRoutingModule,
    FeatherModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    CdkDragPlaceholder

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
