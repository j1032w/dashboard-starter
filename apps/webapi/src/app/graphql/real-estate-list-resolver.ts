import { Args, Query, Resolver } from '@nestjs/graphql';
import { LISTING_QUERY_SERVICE } from '../core/applications/real-estate';
import { RealEstateListingQuery } from '../infrastructures/shared';

import { RealEstateListSchema } from './real-estate-list.schema';
import ListingQueryServiceInterface from '../core/applications/real-estate/listing-query-service.interface';
import { Inject } from '@nestjs/common';

@Resolver()
export class RealEstateListResolver {
  constructor(
    @Inject(LISTING_QUERY_SERVICE)
    private readonly listingQueryService: ListingQueryServiceInterface,
  ) {}

  @Query(() => [RealEstateListSchema])
  async residentialProperties(
    @Args('filter', { type: () => RealEstateListingQuery })
    filter: RealEstateListingQuery,
  ) {
    return await this.listingQueryService.findAllAsync(filter);
  }
}


// query{
//   residentialProperties(
//     filter: {city: "Calgary"}
// ){
//     id,
//       city,
//       buildingType,
//       propertyOwnershipType,
//       buildingStoriesTotal,
//       buildingAmenity
//
//   }
// }
