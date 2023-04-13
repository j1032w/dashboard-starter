import { Component, Input, OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { DasQueryBuilderMongoConverter } from './services/das-query-builder-mongo-converter';

@Component({
  selector: 'das-query-builder',
  templateUrl: './das-query-builder.component.html',
  styleUrls: ['./das-query-builder.component.scss']
})
export class DasQueryBuilderComponent implements OnInit{
  @Input() query: any;
  @Input() config: QueryBuilderConfig;

  constructor(public readonly queryBuilderMongoConverter :DasQueryBuilderMongoConverter) {

  }

  ngOnInit() {
    this.queryBuilderMongoConverter.config = this.config;
  }
}
