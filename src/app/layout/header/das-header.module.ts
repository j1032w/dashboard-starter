import {NgModule} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import {RouterLink} from '@angular/router';
import { FeatherModule } from 'angular-feather';
import {DasHeaderComponent} from './das-header.component';


@NgModule({
  declarations: [
    DasHeaderComponent
  ],
  imports: [
    RouterLink,
    FeatherModule,
    MatBadgeModule


  ],
  exports: [
    DasHeaderComponent
  ],
  providers: []
})
export class DasHeaderModule {
}
