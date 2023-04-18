import { Component } from '@angular/core';
import {
  HOUSING_MARKET_DEMO_QUERY
} from '../../common/hosing-market-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-ui-query-builder',
  templateUrl: './ui-query-builder.component.html',
  styleUrls: ['./ui-query-builder.component.scss']
})
export class UiQueryBuilderComponent {

  query = HOUSING_MARKET_DEMO_QUERY;

}


