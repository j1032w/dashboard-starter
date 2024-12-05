import { ApiProperty } from '@nestjs/swagger';
import {Type} from 'class-transformer';

export default class RealEstateListingBaseDto {
  @ApiProperty({
    description: `The building amenity`,
    type: 'string',
    example: 'Gym',
    required: false,
  })
  buildingAmenity?: string;

  @ApiProperty({
    description: 'The total number of bathrooms in the building',
    type: 'string',
    example: '2',
    required: false,
  })
  buildingBathroomTotal?: number;

  @ApiProperty({
    description: 'The total number of bedrooms in the building',
    type: 'string',
    example: '2',
    required: false,
  })
  buildingBedroom?: number;

  @ApiProperty({
    description: 'The interior size of the building',
    type: 'number',
    example: '1556',
    required: false,
  })
  buildingSizeInterior: number;

  @ApiProperty({
    description: 'The total number of stories of the building',
    type: 'number',
    example: '2',
    required: false,
  })
  buildingStoriesTotal: number;

  @ApiProperty({
    description: 'The type of building',
    type: 'string',
    example: 'Row / Townhouse',
  })
  buildingType: string;

  @ApiProperty({
    description: 'The distance to the nearest landmark',
    type: 'string',
    example: '1.5 km',
    required: false,
  })
  distance: string;

  @ApiProperty({
    description: 'The landscape feature of the land',
    type: 'string',
    example: 'Landscaped',
    required: false,
  })
  landLandscapeFeature: string;

  @ApiProperty({
    description: 'The land size in square feet',
    type: 'string',
    example: '202.4 m2|0-4,050 sqft',
    required: false,
  })
  landSizeTotal: string;

  @ApiProperty({
    description: 'The listing boundary',
    type: 'string',
    example: 'America/Edmonton',
    required: false,
  })
  listingBoundary: string;

  @ApiProperty({
    description: 'The MLS number',
    type: 'string',
    example: 'A1111111',
  })
  mlsNumber: string;

  @ApiProperty({
    description: 'The postal code',
    type: 'string',
    example: 'T1T1T1',
  })
  postalCode: string;

  @ApiProperty({
    description: 'The unformatted price value',
    type: 'number',
    example: '100000',
    required: false,
  })
  priceUnformattedValue: number;

  @ApiProperty({
    description: 'The property amenity near by',
    type: 'string',
    example: 'Shopping',
    required: false,
  })
  propertyAmenityNearBy: string;

  @ApiProperty({
    description: 'The property ownership type',
    type: 'string',
    example: 'Freehold',
    required: false,
  })
  propertyOwnershipType: string;

  @ApiProperty({
    description: 'The total number of parking spaces',
    type: 'number',
    example: '2',
    required: false,
  })
  propertyParkingSpaceTotal: number;

  @ApiProperty({
    description: 'The property parking type',
    type: 'string',
    example: 'Attached Garage',
    required: false,
  })
  propertyParkingType: string;

  @ApiProperty({
    description: 'The property type',
    type: 'string',
    example: 'Single Family',
  })
  propertyType: string;

  @ApiProperty({
    description: 'The province name',
    type: 'string',
    example: 'Alberta',
  })
  provinceName: string;

  @ApiProperty({
    description: 'The remark',
    type: 'string',
    example:
      'This stunning 2 storey house located in the sought-after Copperfield neighborhood is the perfect family home. ',
    required: false,
  })
  remark: string;


  @ApiProperty({
    description: 'The city',
    type: 'string',
    example: 'Calgary',
  })
  city?: string;


  @ApiProperty({
    description: 'The listed time in UTC',
    type: 'string',
    example: '2021-05-01T00:00:00.000Z',
  })
  @Type(() => Date)
  listedTime: Date;


  @ApiProperty({
    description: 'The modified time in UTC',
    type: 'string',
    example: '2021-05-01T00:00:00.000Z',
  })
  @Type(() => Date)
  modifiedTime: Date;

  constructor(data: Partial<RealEstateListingBaseDto>) {
    if (!data) {
      return;
    }

    Object.assign(this, data);

    this.listedTime = data?.listedTime ? new Date(this.listedTime) : null;
    this.modifiedTime = data?.modifiedTime ? new Date(this.modifiedTime) : null;
  }
}
