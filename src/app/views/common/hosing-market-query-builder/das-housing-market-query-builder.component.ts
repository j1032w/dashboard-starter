import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';
import { NgScrollbar } from 'ngx-scrollbar';
import { DasCommonComponentModule } from '../../../common/das-common-component.module';
import { DasQueryBuilderMongoConvertor } from './services/das-query-builder-mongo-convertor.service';

import { HOUSING_MARKET_QUERY_CONFIG } from './services/das-query-builder.constant';

@Component({
  selector: 'das-house-market-query-builder',
  templateUrl: './das-housing-market-query-builder.component.html',
  styleUrls: ['./das-housing-market-query-builder.component.scss'],
  standalone: true,

  imports: [NgScrollbar, NgxAngularQueryBuilderModule, JsonPipe, DasCommonComponentModule]
})
export class DasHousingMarketQueryBuilderComponent implements OnInit {
  @Input() query: any = {};

  config = HOUSING_MARKET_QUERY_CONFIG;

  constructor(public readonly queryBuilderMongoConvertor: DasQueryBuilderMongoConvertor) {}

  ngOnInit() {
    this.queryBuilderMongoConvertor.config = this.config;
  }

  getMongoQuery() {
    return this.queryBuilderMongoConvertor.mapRuleSet(this.query);
  }
}
