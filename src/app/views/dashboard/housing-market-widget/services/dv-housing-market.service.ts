import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DasServiceBaes } from '../../../../common/services/das-service-baes';
import { MongoQuery } from '../../../../common/services/mongo-query';

import { DvHousingMarketRepository } from './dv-housing-market-repository.service';

@Injectable({ providedIn: 'root' })
export class DvHousingMarketService extends DasServiceBaes {
  constructor(private readonly housingMarketRepository: DvHousingMarketRepository) {
    super();
  }

  readonly getHomeTypePercentages$ = (query: MongoQuery) => {
    return this.housingMarketRepository.query$(query)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
      console.log(data);
    });
  }


}
