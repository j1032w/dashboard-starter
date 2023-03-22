import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DasHeaderComponent} from './das-header.component';


@NgModule({
  declarations: [
    DasHeaderComponent
  ],
  imports: [
    RouterLink


  ],
  exports: [
    DasHeaderComponent
  ],
  providers: []
})
export class DasHeaderModule {
}
