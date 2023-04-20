import { Component, Input, OnInit } from '@angular/core';
import { DasQueryBuilderMongoConvertor } from './services/das-query-builder-mongo-convertor.service';


import { HOUSING_MARKET_QUERY_CONFIG } from './services/das-query-builder.constant';


@Component({
  selector: 'das-house-market-query-builder',
  templateUrl: './das-housing-market-query-builder.component.html',
  styleUrls: ['./das-housing-market-query-builder.component.scss']
})
export class DasHousingMarketQueryBuilderComponent implements OnInit {
  @Input() query: any ={};


  config = HOUSING_MARKET_QUERY_CONFIG;

  constructor(public readonly queryBuilderMongoConvertor: DasQueryBuilderMongoConvertor) {
  }

  ngOnInit() {
    this.queryBuilderMongoConvertor.config = this.config;
  }

  getMongoQuery() {
    return this.queryBuilderMongoConvertor.mapRuleSet(this.query);
  }
}
