import { Injectable } from '@angular/core';
import { DasHttpClient } from '../../../../common/services/das-http-client';

@Injectable({ providedIn: 'root' })
export class DvHousingMarketRepository {


  constructor(
    private readonly dasHttpClient: DasHttpClient
  ) {

  }


  query$(mongoFilter: any) {
    return this.dasHttpClient.post$(`v1/housing-market/search`, mongoFilter);
  }

}
