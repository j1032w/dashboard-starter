import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';

import { DasUserInterfaceComponent } from './user-interface.component';


@NgModule({
  declarations: [
    DasUserInterfaceComponent,
    UiAnimationComponent,
    UiDragDropComponent

  ],
  imports: [
    CommonModule,
    DasUserInterfaceRoutingModule,
    FeatherModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
