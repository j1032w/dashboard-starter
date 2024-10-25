import { Injectable } from '@angular/core';

import { DasHttpClient } from '../../../common/services/das-http-client';

@Injectable({ providedIn: 'root' })
export class DasHousingMarketRepository {
  constructor(private readonly dasHttpClient: DasHttpClient) {}

  query$(mongoFilter: any, spinnerId: string): any {
    return this.dasHttpClient.post$(`v1/housing-market/search`, mongoFilter, spinnerId);
  }
}
