import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';

import { ToastModule } from 'primeng/toast';
import { DasComponentFormModule } from '../component/form/das-component-form.module';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';
import { DasUserInterfaceMainComponent } from './user-interface-main.component';


import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';


@NgModule({
  declarations: [
    DasUserInterfaceMainComponent,
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
    FormsModule,
    CardModule,
    DasComponentFormModule,
    DialogModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
