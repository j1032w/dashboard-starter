import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';
import { FeatherModule } from 'angular-feather';
import {DasHeaderComponent} from './das-header.component';


@NgModule({
  declarations: [
    DasHeaderComponent
  ],
  imports: [
    RouterLink,
    FeatherModule


  ],
  exports: [
    DasHeaderComponent
  ],
  providers: []
})
export class DasHeaderModule {
}
