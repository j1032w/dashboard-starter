import { Injectable } from '@angular/core';
import { map, Observable, takeUntil } from 'rxjs';
import { DasServiceBaes } from '../../../../common/services/das-service-baes';
import { MongoQuery } from '../../../../common/services/mongo-query';
import { DvHousingMarketRepository } from '../../../common/services/dv-housing-market.repository';
import { BuildingTypeEnum } from './building-type.enum';



export const HOUSE_MARKET_WIDGET_SPINNER_ID = 'house-market-widget-spinner-id';

@Injectable({ providedIn: 'root' })
export class DvHousingMarketService extends DasServiceBaes {
  constructor(private readonly housingMarketRepository: DvHousingMarketRepository) {
    super();
  }

  readonly getHomeTypePercentages$ = (query: MongoQuery): Observable<any> => {
    return this.housingMarketRepository.query$(query, HOUSE_MARKET_WIDGET_SPINNER_ID)
      .pipe(
        takeUntil(this.ngUnsubscribe),
        map((data: any[]) => {
          const apartmentPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Apartment, total: 0 };

          const housePercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.House, total: 0 };

          const duplexPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Duplex, total: 0 };

          const fourplexPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Fourplex, total: 0 };

          const manufacturedHomePercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.ManufacturedHome, total: 0 };

          const mobileHomePercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.MobileHome, total: 0 };

          const multiFamilyPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.MultiFamily, total: 0 };

          const parkingPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Parking, total: 0 };

          const townhousePercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Townhouse, total: 0 };

          const triplexPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Triplex, total: 0 };

          const unknownPercentage: BuildingTypePercentageInterface =
            { buildingType: BuildingTypeEnum.Unknown, total: 0 };


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
            unknownPercentage
          ];


        })
      );

  };

}

export interface BuildingTypePercentageInterface {
  buildingType: BuildingTypeEnum;
  total: number;
  percentage?: number;
}
