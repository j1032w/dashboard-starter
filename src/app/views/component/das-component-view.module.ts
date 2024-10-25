import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

import { DasComponentViewComponent } from './das-component-view.component';
import { DasComponentViewRoutingModule } from './das-component-view-routing.module';
import { DasComponentFormModule } from './form/das-component-form.module';
import { CompMultiplePurposeComponent } from './multiple-purpose/comp-multiple-purpose.component';
import { CompNotificationComponent } from './notification/comp-notification.component';

@NgModule({
  declarations: [DasComponentViewComponent, CompMultiplePurposeComponent, CompNotificationComponent],
  imports: [
    CommonModule,
    DasComponentViewRoutingModule,
    FeatherModule,
    DasComponentFormModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    RatingModule,
    CardModule,
    SelectButtonModule,
    TabViewModule,
    RadioButtonModule,
    FormsModule,
    AvatarModule,
    BadgeModule
  ],
  providers: [DasComponentViewComponent]
})
export class DasComponentViewModule {}
