import { Component, Input, OnInit } from '@angular/core';
import { DasQueryBuilderConverter } from './services/das-query-builder-converter.service';
import { HOUSING_MARKET_QUERY_CONFIG } from './services/das-query-builder.constant';


@Component({
  selector: 'das-house-market-query-builder',
  templateUrl: './das-housing-market-query-builder.component.html',
  styleUrls: ['./das-housing-market-query-builder.component.scss']
})
export class DasHousingMarketQueryBuilderComponent implements OnInit {
  @Input() query: any;

  config = HOUSING_MARKET_QUERY_CONFIG;

  constructor(public readonly queryBuilderMongoConverter: DasQueryBuilderConverter) {

  }

  ngOnInit() {
    this.queryBuilderMongoConverter.config = this.config;
  }
}
