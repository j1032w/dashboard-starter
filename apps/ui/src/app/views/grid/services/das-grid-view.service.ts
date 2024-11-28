import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {DasRealEstateMarketRepository} from '../../common/services/das-real-estate-market-repository.service';


import { GRID_VIEW_SPINNER_ID } from './das-grid-view.constant';

@Injectable({ providedIn: 'root' })
export class DasGridViewService {
  constructor(private readonly realEstateMarketRepository: DasRealEstateMarketRepository) {}

  fetchHousingMarketData$(mongoFilter: any): Observable<any> {
    return this.realEstateMarketRepository.query$(mongoFilter, GRID_VIEW_SPINNER_ID).pipe(
      tap((data: any[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i]['rowId'] = i;
        }
      })
    );
  }
}
