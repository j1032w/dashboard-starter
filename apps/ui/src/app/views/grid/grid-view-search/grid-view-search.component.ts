import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { DasHousingMarketQueryBuilderComponent } from '../../common/hosing-market-query-builder/das-housing-market-query-builder.component';
import { DialogModule } from 'primeng/dialog';
import { PrimeTemplate } from 'primeng/api';

@Component({
    selector: 'das-grid-view-search',
    templateUrl: './grid-view-search.component.html',
    styleUrls: ['./grid-view-search.component.scss'],
    standalone: true,
    imports: [DialogModule, DasHousingMarketQueryBuilderComponent, PrimeTemplate]
})
export class GridViewSearchComponent {
  @ViewChild('queryBuilderComponent') queryBuilderComponent: DasHousingMarketQueryBuilderComponent;

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @Input() query: any;

  @Output() apply = new EventEmitter<any>();

  onHide() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

  applySetting() {
    this.apply.emit(this.queryBuilderComponent.getMongoQuery());
    this.onHide();
  }
}
