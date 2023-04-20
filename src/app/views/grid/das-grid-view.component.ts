import { Component } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { GRID_VIEW_COLUMNS } from './services/das-grid-view.constant';

@Component({
  selector: 'das-grid-view',
  templateUrl: './das-grid-view.component.html',
  styleUrls: ['./das-grid-view.component.scss']
})
export class DasGridViewComponent extends DasComponentBase{
    columns = GRID_VIEW_COLUMNS

  constructor() {
    super();
  }
}
