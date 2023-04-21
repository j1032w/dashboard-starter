import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasGridComponent } from '../../common/components/das-grid/das-grid.component';
import { HOUSING_MARKET_DEMO_QUERY } from '../common/hosing-market-query-builder/services/das-query-builder.constant';
import { DEMO_MONGO_FILTER, GRID_VIEW_COLUMNS, GRID_VIEW_SPINNER_ID } from './services/das-grid-view.constant';
import { DasGridViewService } from './services/das-grid-view.service';

@Component({
  selector: 'das-grid-view',
  templateUrl: './das-grid-view.component.html',
  styleUrls: ['./das-grid-view.component.scss']
})
export class DasGridViewComponent extends DasComponentBase implements OnInit{
  @ViewChild('gridComponent') gridComponent: DasGridComponent;

  spinnerId = GRID_VIEW_SPINNER_ID;

  columns = GRID_VIEW_COLUMNS;

  isSearchDialogVisible = false;

  query = HOUSING_MARKET_DEMO_QUERY;

  dataSource = [];

  private readonly mongoFilter = DEMO_MONGO_FILTER;

  constructor(private readonly gridViewService: DasGridViewService) {
    super();
  }

  ngOnInit() {

  }

  showSearchDialog() {
    this.isSearchDialogVisible = true;
  }

  apply(mongoQuery: any) {
    this.mongoFilter.filter = mongoQuery;
    this.refresh();
  }

  refresh() {
    if(!this.mongoFilter.filter){return;}

    this.gridViewService.fetchHousingMarketData$(this.mongoFilter)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data) => {
          this.dataSource = data;
        }
      );
  }

  showColumnChooser() {
    this.gridComponent.showColumnChooser();
  }

  export(){
    this.gridComponent.export();
  }

}
