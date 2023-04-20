import { Injectable } from '@angular/core';
import { DasHttpClient } from '../../../../common/services/das-http-client';
import { HOUSE_MARKET_WIDGET_SPINNER_ID } from './dv-housing-market.service';

@Injectable({ providedIn: 'root' })
export class DvHousingMarketRepository {


  constructor(private readonly dasHttpClient: DasHttpClient) {
  }


  query$(mongoFilter: any) {
    return this.dasHttpClient.post$(
      `v1/housing-market/search`,
      mongoFilter,
      HOUSE_MARKET_WIDGET_SPINNER_ID
    );
  }

}
