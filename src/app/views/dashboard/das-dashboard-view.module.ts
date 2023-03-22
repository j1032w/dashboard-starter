import {NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasDashboardViewComponent} from './das-dashboard-view.component';


@NgModule({
  declarations: [DasDashboardViewComponent],
  imports: [
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
