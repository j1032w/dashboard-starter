import {ApiProperty} from '@nestjs/swagger';
import {
  Exclude,
  Expose
} from 'class-transformer';
import RealEstateListingBaseDto from './real-estate-listing-base.dto';

export default class RealEstateListingResponseDto extends RealEstateListingBaseDto {

  @ApiProperty({
    description: `The unique identifier of the listing`,
    type: 'string',
    example: '25472603',
    required: true
  })
  @Expose()
  id: string;

  @Exclude()
  _id:object;

  @Expose()
  buildingAmenity?: string;

  @Expose()
  buildingBathroomTotal?: number;

  @Expose()
  buildingBedroom?: number;

  @Expose()
  buildingSizeInterior: number;

  @Expose()
  buildingStoriesTotal: number;

  @Expose()
  buildingType: string;

  @Expose()
  distance: string;

  @Expose()
  landLandscapeFeature: string;

  @Expose()
  landSizeTotal: string;

  @Expose()
  listingBoundary: string;

  @Expose()
  mlsNumber: string;

  @Expose()
  postalCode: string;

  @Expose()
  priceUnformattedValue: number;

  @Expose()
  propertyAmenityNearBy: string;

  @Expose()
  propertyOwnershipType: string;

  @Expose()
  propertyParkingSpaceTotal: number;

  @Expose()
  propertyParkingType: string;

  @Expose()
  propertyType: string;

  @Expose()
  provinceName: string;

  @Expose()
  remark: string;

  @Expose()
  city?: string;

  @Expose()
  listedTime: Date;

  @Expose()
  modifiedTime: Date;
}
