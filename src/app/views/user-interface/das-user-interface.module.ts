import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryBuilderModule } from 'angular2-query-builder';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DasRealtorQueryBuilderModule } from '../common/realtor-query-builder/das-realtor-query-builder.module';


import { DasComponentFormModule } from '../component/form/das-component-form.module';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';
import { DasUserInterfaceMainComponent } from './user-interface-main.component';


import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';
import { UiQueryBuilderComponent } from './query-builder/ui-query-builder.component';


@NgModule({
  declarations: [
    DasUserInterfaceMainComponent,
    UiAnimationComponent,
    UiDragDropComponent,
    UiVirtualScrollComponent,
    UiResponsiveComponent,
    UiQueryBuilderComponent

  ],
  imports: [
    CardModule,
    DasCommonModule,
    DasComponentFormModule,
    DasRealtorQueryBuilderModule,
    DasUserInterfaceRoutingModule,
    DialogModule,
    DragDropModule,
    FormsModule,
    InputNumberModule,
    MessagesModule,
    NgScrollbarModule,
    QueryBuilderModule,
    ScrollingModule,

  ],
  providers: []

})
export class DasUserInterfaceModule {
}
