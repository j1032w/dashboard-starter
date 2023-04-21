import { Observable } from 'rxjs';
import { DasHousingMarketRepository } from '../../common/services/das-housing-market-repository.service';
import { GRID_VIEW_SPINNER_ID } from './das-grid-view.constant';


import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DasGridViewService{
  constructor(private readonly housingMarketRepository :DasHousingMarketRepository) {
  }

  fetchHousingMarketData$(mongoFilter:any):Observable<any>{
    return this.housingMarketRepository.query$(mongoFilter, GRID_VIEW_SPINNER_ID);
  }


}
