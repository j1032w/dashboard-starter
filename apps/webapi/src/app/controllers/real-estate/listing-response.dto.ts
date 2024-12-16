import { Expose } from 'class-transformer';
import ListingBaseDto from './listing-base.dto';
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export default class ListingResponseDto extends ListingBaseDto {
  @Field({nullable: true})
  @Expose()
  persistenceId?: string;

  @Field({nullable: true})
  @Expose()
  id?: string;

  @Field({nullable: true})
  @Expose()
  buildingAmenity?: string;

  @Field({nullable: true})
  @Expose()
  buildingBathroomTotal?: number;

  @Field({nullable: true})
  @Expose()
  buildingBedroom?: number;

  @Field({nullable: true})
  @Expose()
  buildingSizeInterior?: number;

  @Field({nullable: true})
  @Expose()
  buildingStoriesTotal?: number;

  @Field({nullable: true})
  @Expose()
  buildingType?: string;

  @Field({nullable: true})
  @Expose()
  distance?: string;

  @Field({nullable: true})
  @Expose()
  landLandscapeFeature?: string;

  @Field({nullable: true})
  @Expose()
  landSizeTotal?: string;

  @Field({nullable: true})
  @Expose()
  listingBoundary?: string;

  @Field({nullable: true})
  @Expose()
  mlsNumber?: string;

  @Field({nullable: true})
  @Expose()
  postalCode?: string;

  @Field({nullable: true})
  @Expose()
  priceUnformattedValue?: number;

  @Field({nullable: true})
  @Expose()
  propertyAmenityNearBy?: string;

  @Field({nullable: true})
  @Expose()
  propertyOwnershipType?: string;

  @Field({nullable: true})
  @Expose()
  propertyParkingSpaceTotal?: number;

  @Field({nullable: true})
  @Expose()
  propertyParkingType?: string;

  @Field({nullable: true})
  @Expose()
  propertyType?: string;

  @Field({nullable: true})
  @Expose()
  provinceName?: string;

  @Field({nullable: true})
  @Expose()
  remark?: string;

  @Field({nullable: true})
  @Expose()
  city?: string;

  @Field({nullable: true})
  @Expose()
  listedTime?: Date;

  @Field({nullable: true})
  @Expose()
  modifiedTime?: Date;
}
