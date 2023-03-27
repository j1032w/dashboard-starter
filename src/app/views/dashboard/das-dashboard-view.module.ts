import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasDashboardMainComponent } from './das-dashboard-main.component';


@NgModule({
  declarations: [DasDashboardMainComponent],
  imports: [
    CommonModule


  ],
  exports: [
    DasDashboardMainComponent
  ],
  providers: []
})
export class DasDashboardViewModule {
}
