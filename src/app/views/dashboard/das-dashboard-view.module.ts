import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasDashboardViewComponent} from './das-dashboard-view.component';


@NgModule({
  declarations: [DasDashboardViewComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet

  ],
  exports: [
    DasDashboardViewComponent
  ],
  providers: []
})
export class DasDashboardViewModule {
}
