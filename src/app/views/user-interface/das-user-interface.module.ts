import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { DasCommonModule } from '../../common/components/das-common.module';

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
    DasCommonModule,
    CardModule,
    DasComponentFormModule,
    DasUserInterfaceRoutingModule,
    DialogModule,
    DragDropModule,
    FormsModule,
    InputNumberModule,
    MessagesModule,
    NgScrollbarModule,
    ScrollingModule

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
