import { Component } from '@angular/core';
import {
  REALTOR_DEMO_QUERY,
  REALTOR_QUERY_CONFIG
} from '../../common/realtor-query-builder/services/das-query-builder.constant';

@Component({
  selector: 'das-ui-query-builder',
  templateUrl: './ui-query-builder.component.html',
  styleUrls: ['./ui-query-builder.component.scss']
})
export class UiQueryBuilderComponent {

  query = REALTOR_DEMO_QUERY;

}


