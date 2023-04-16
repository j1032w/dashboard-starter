import { Component, Input, OnInit } from '@angular/core';
import { REALTOR_QUERY_CONFIG } from './services/das-query-builder.constant';
import { DasQueryBuilderConverter } from './services/das-realtor-query-builder-mongo-converter.service';

@Component({
  selector: 'das-realtor-query-builder',
  templateUrl: './das-realtor-query-builder.component.html',
  styleUrls: ['./das-realtor-query-builder.component.scss']
})
export class DasRealtorQueryBuilderComponent implements OnInit {
  @Input() query: any;

  config = REALTOR_QUERY_CONFIG;

  constructor(public readonly queryBuilderMongoConverter: DasQueryBuilderConverter) {

  }

  ngOnInit() {
    this.queryBuilderMongoConverter.config = this.config;
  }
}
