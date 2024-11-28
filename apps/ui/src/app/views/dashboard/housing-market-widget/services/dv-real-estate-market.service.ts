import { Injectable } from '@angular/core';
import { map, Observable, takeUntil } from 'rxjs';

import { DasServiceBaes } from '../../../../common/services/das-service-baes';
import { MongoQuery } from '../../../../common/services/mongo-query';
import {DasRealEstateMarketRepository} from '../../../common/services/das-real-estate-market-repository.service';

import { BuildingTypeEnum } from './building-type.enum';

export const HOUSE_MARKET_WIDGET_SPINNER_ID = 'house-market-widget-spinner-id';

@Injectable({ providedIn: 'root' })
export class DvRealEstateMarketService extends DasServiceBaes {
  constructor(private readonly realEstateMarketRepository: DasRealEstateMarketRepository) {
    super();
  }

  readonly getHomeTypePercentages$ = (query: MongoQuery): Observable<any> => {
    return this.realEstateMarketRepository.query$(query, HOUSE_MARKET_WIDGET_SPINNER_ID).pipe(
      takeUntil(this.destroyed$),
      map((data: any[]) => {
        const apartmentPercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.Apartment,
          total: 0,
        };

        const housePercentage: BuildingTypePercentage = { buildingType: BuildingTypeEnum.House, total: 0 };

        const duplexPercentage: BuildingTypePercentage = { buildingType: BuildingTypeEnum.Duplex, total: 0 };

        const fourplexPercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.Fourplex,
          total: 0,
        };

        const manufacturedHomePercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.ManufacturedHome,
          total: 0,
        };

        const mobileHomePercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.MobileHome,
          total: 0,
        };

        const multiFamilyPercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.MultiFamily,
          total: 0,
        };

        const parkingPercentage: BuildingTypePercentage = { buildingType: BuildingTypeEnum.Parking, total: 0 };

        const townhousePercentage: BuildingTypePercentage = {
          buildingType: BuildingTypeEnum.Townhouse,
          total: 0,
        };

        const triplexPercentage: BuildingTypePercentage = { buildingType: BuildingTypeEnum.Triplex, total: 0 };

        const unknownPercentage: BuildingTypePercentage = { buildingType: BuildingTypeEnum.Unknown, total: 1 };

        if (data.length > 0) {
          data.forEach((item: any) => {
            switch (item.buildingType) {
              case BuildingTypeEnum.Apartment:
                apartmentPercentage.total++;
                break;

              case BuildingTypeEnum.House:
                housePercentage.total++;
                break;

              case BuildingTypeEnum.Duplex:
                duplexPercentage.total++;
                break;

              case BuildingTypeEnum.Fourplex:
                fourplexPercentage.total++;
                break;

              case BuildingTypeEnum.ManufacturedHome:
                manufacturedHomePercentage.total++;
                break;

              case BuildingTypeEnum.MobileHome:
                mobileHomePercentage.total++;
                break;

              case BuildingTypeEnum.MultiFamily:
                multiFamilyPercentage.total++;
                break;

              case BuildingTypeEnum.Parking:
                parkingPercentage.total++;
                break;

              case BuildingTypeEnum.Townhouse:
                townhousePercentage.total++;
                break;

              case BuildingTypeEnum.Triplex:
                triplexPercentage.total++;
                break;

              default:
                unknownPercentage.total++;
            }
          });
          const total = data.length;
          apartmentPercentage.percentage = apartmentPercentage.total / total;
          housePercentage.percentage = housePercentage.total / total;
          duplexPercentage.percentage = duplexPercentage.total / total;
          fourplexPercentage.percentage = fourplexPercentage.total / total;
          manufacturedHomePercentage.percentage = manufacturedHomePercentage.total / total;
          mobileHomePercentage.percentage = mobileHomePercentage.total / total;
          multiFamilyPercentage.percentage = multiFamilyPercentage.total / total;
          parkingPercentage.percentage = parkingPercentage.total / total;
          townhousePercentage.percentage = townhousePercentage.total / total;
          triplexPercentage.percentage = triplexPercentage.total / total;
          unknownPercentage.percentage = unknownPercentage.total / total;
        }

        return [
          apartmentPercentage,
          housePercentage,
          duplexPercentage,
          fourplexPercentage,
          manufacturedHomePercentage,
          mobileHomePercentage,
          multiFamilyPercentage,
          parkingPercentage,
          townhousePercentage,
          triplexPercentage,
          unknownPercentage,
        ];
      }),
    );
  };
}

export type BuildingTypePercentage = {
  buildingType: BuildingTypeEnum;
  total: number;
  percentage?: number;
};
