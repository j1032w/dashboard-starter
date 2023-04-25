import {NgModule} from '@angular/core';
import {DxDataGridModule} from 'devextreme-angular';
import {DasCommonModule} from '../das-common.module';
import {DasGridComponent} from './das-grid.component';


@NgModule({
  imports: [
    DasCommonModule,
    DxDataGridModule,
  ],
  declarations: [
    DasGridComponent
  ],
  exports: [
    DasGridComponent
  ]
})
export class DasGridModule {
}
