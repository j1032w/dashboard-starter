import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import ListingBaseDto from './listing-base.dto';

export default class ListingRequestDto extends ListingBaseDto {
  @IsString()
  @IsOptional()
  persistenceId?: string;

  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  buildingAmenity?: string;

  @IsNumber()
  @IsOptional()
  buildingBathroomTotal?: number;

  @IsNumber()
  @IsOptional()
  buildingBedroom?: number;

  @IsNumber()
  @IsOptional()
  buildingSizeInterior?: number;

  @IsNumber()
  @IsOptional()
  buildingStoriesTotal?: number;

  @IsString()
  @IsOptional()
  buildingType?: string;

  @IsString()
  @IsOptional()
  distance?: string;

  @IsString()
  @IsOptional()
  landLandscapeFeature?: string;

  @IsString()
  @IsOptional()
  landSizeTotal?: string;

  @IsString()
  @IsOptional()
  listingBoundary?: string;

  @IsString()
  @IsOptional()
  mlsNumber?: string;

  @IsString()
  @IsOptional()
  postalCode?: string;

  @IsNumber()
  @IsOptional()
  priceUnformattedValue?: number;

  @IsString()
  @IsOptional()
  propertyAmenityNearBy?: string;

  @IsString()
  @IsOptional()
  propertyOwnershipType?: string;

  @IsNumber()
  @IsOptional()
  propertyParkingSpaceTotal?: number;

  @IsString()
  @IsOptional()
  propertyParkingType?: string;

  @IsString()
  @IsOptional()
  propertyType?: string;

  @IsString()
  @IsOptional()
  provinceName?: string;

  @IsString()
  @IsOptional()
  remark?: string;

  @IsDateString()
  @IsOptional()
  city?: string;

  @IsDateString()
  @IsOptional()
  listedTime?: Date;

  constructor(data: Partial<ListingRequestDto>) {
    super(data);
  }
}
