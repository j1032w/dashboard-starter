import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';

import { ToastModule } from 'primeng/toast';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';

import { DasUserInterfaceComponent } from './user-interface.component';
import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';


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
    DragDropModule,
    NgScrollbarModule,
    ScrollingModule,
    MessagesModule,
    ToastModule,
    InputNumberModule,
    FormsModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
