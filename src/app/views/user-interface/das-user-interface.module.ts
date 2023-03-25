import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { DasUiFormModule } from './form/das-ui-form.module';
import { UiGridComponent } from './grid/ui-grid.component';
import { UiAnimationComponent } from './animation/ui-animation.component';

import { DasUserInterfaceComponent } from './user-interface.component';


@NgModule({
  declarations: [
    DasUserInterfaceComponent,
    UiAnimationComponent,
    UiDragDropComponent,
    UiGridComponent
  ],
  imports: [
    CommonModule,
    DasUserInterfaceRoutingModule,
    FeatherModule,
    DasUiFormModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
