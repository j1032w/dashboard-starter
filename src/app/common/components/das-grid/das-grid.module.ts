import { NgModule } from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';


import { DasCommonModule } from '../../das-common.module';
import { DasGridComponent } from './das-grid.component';

@NgModule({
  imports: [DasCommonModule, AgGridAngular],
  declarations: [DasGridComponent],
  exports: [DasGridComponent]
})
export class DasGridModule {}
