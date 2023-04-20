import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DvGridViewComponent } from './dv-grid-view.component';


@NgModule({
  declarations: [DvGridViewComponent],

  exports: [DvGridViewComponent],

  imports: [
    DasCommonModule,
    DevExtremeModule
  ],
  providers: []
})
export class DasGridViewModule {
}
