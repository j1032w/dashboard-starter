import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DasServiceBaes } from '../../common/services/das-service-baes';

@Injectable({ providedIn: 'root' })
export class RealtorRepositoryService extends DasServiceBaes {
  private readonly uri = 'https://api.realtor.ca/Listing.svc/PropertySearch_Post';

  constructor(
    private readonly httpClient: HttpClient
  ) {
    super();
  }


  fetchData$():Observable<any> {
    let opts = {
      // LongitudeMin: -79.6758985519409,
      // LongitudeMax: -79.6079635620117,
      // LatitudeMin: 43.57601549736786,
      // LatitudeMax: 43.602250137362276,
      // PriceMin: 100000,
      // PriceMax: 410000
      ZoomLevel: 10,
      LatitudeMax: 51.24834,
      LongitudeMax: -113.30140,
      LatitudeMin: 50.80698,
      LongitudeMin: -114.87244,
      CurrentPage: 1,
      Sort: "6-D",
      PropertyTypeGroupID: 1,
      PropertySearchTypeId: 0,
      TransactionTypeId: 2,
      Currency: "CAD",
      RecordsPerPage: 12,
      ApplicationId: 1,
      CultureId: 1,
      Version: "7.0"
    };

    const headers = new HttpHeaders({
      'Referer': 'https://www.realtor.ca/',
      'Origin': 'https://www.realtor.ca',
      //'Host': 'api2.realtor.ca'
    });

    return this.httpClient.post(this.uri, {body:"ZoomLevel=10&LatitudeMax=51.24834&LongitudeMax=-113.30140&LatitudeMin=50.80698&LongitudeMin=-114.87244&CurrentPage=2&Sort=6-D&PropertyTypeGroupID=1&PropertySearchTypeId=0&TransactionTypeId=2&Currency=CAD&RecordsPerPage=12&ApplicationId=1&CultureId=1&Version=7.0"},
      {
        headers
      }
    );

  }

}
