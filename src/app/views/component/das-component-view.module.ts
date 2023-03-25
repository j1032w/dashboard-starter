import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { DasComponentViewRoutingModule } from './das-component-view-routing.module';

import { DasComponentFormModule } from './form/das-component-form.module';
import { DasComponentViewComponent } from './das-component-view.component';
import { CompGridComponent } from './grid/comp-grid.component';



@NgModule({
  declarations: [
    DasComponentViewComponent,
    CompGridComponent
  ],
  imports: [
    CommonModule,
    DasComponentViewRoutingModule,
    FeatherModule,
    DasComponentFormModule

  ],
  providers: [DasComponentViewComponent]

})
export class DasComponentViewModule {
}
