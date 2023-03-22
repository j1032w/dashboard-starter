import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterLink

  ],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule {
}
