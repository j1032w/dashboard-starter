import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DasGridModule } from '../../common/components/das-grid/das-grid.module';
import { DasGridViewComponent } from './das-grid-view.component';


@NgModule({
  declarations: [DasGridViewComponent],

  exports: [DasGridViewComponent],

  imports: [
    DasCommonModule,
    DevExtremeModule,
    DasGridModule,
  ],
  providers: []
})
export class DasGridViewModule {
}
