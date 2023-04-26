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
import {DasCommonModule} from '../../common/das-common.module';

import {
  DasHousingMarketQueryBuilderModule
} from '../common/hosing-market-query-builder/das-housing-market-query-builder.module';


import { DasComponentFormModule } from '../component/form/das-component-form.module';
import { UiAnimationComponent } from './animation/ui-animation.component';
import { DasUserInterfaceRoutingModule } from './das-user-interface-routing.module';
import { UiDragDropComponent } from './drag-drop/ui-drag-drop.component';
import { UiQueryBuilderComponent } from './query-builder/ui-query-builder.component';
import { UiResponsiveComponent } from './responsive/ui-responsive.component';
import { UserInterfaceViewComponent } from './user-interface-view.component';


import { UiVirtualScrollComponent } from './virtual-scroll/ui-virtual-scroll.component';


@NgModule({
  declarations: [
    UserInterfaceViewComponent,
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
    DasHousingMarketQueryBuilderModule,
    DasUserInterfaceRoutingModule,
    DialogModule,
    DragDropModule,
    FormsModule,
    InputNumberModule,
    MessagesModule,
    NgScrollbarModule,
    QueryBuilderModule,
    ScrollingModule

  ],

  exports: [UserInterfaceViewComponent],

  providers: []

})
export class DasUserInterfaceModule {
}
