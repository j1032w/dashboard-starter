import StringComparisonInput from '../common/string-comparison-input-type';
import NumberComparisonInput from '../common/number-comparison-input-type';
import DateComparisonInput from '../common/date-comparison-input-type';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class ListingConditionInputType {
  @Field(() => StringComparisonInput, { nullable: true })
  persistenceId?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  id?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  buildingAmenity?: StringComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  buildingBathroomTotal?: NumberComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  buildingBedroom?: NumberComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  buildingSizeInterior?: NumberComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  buildingStoriesTotal?: NumberComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  buildingType?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  distance?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  landLandscapeFeature?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  landSizeTotal?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  listingBoundary?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  mlsNumber?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  postalCode?: StringComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  priceUnformattedValue?: NumberComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  propertyAmenityNearBy?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  propertyOwnershipType?: StringComparisonInput;

  @Field(() => NumberComparisonInput, { nullable: true })
  propertyParkingSpaceTotal?: NumberComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  propertyParkingType?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  propertyType?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  provinceName?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  remark?: StringComparisonInput;

  @Field(() => StringComparisonInput, { nullable: true })
  city?: StringComparisonInput;

  @Field(() => DateComparisonInput, { nullable: true })
  listedTime?: DateComparisonInput;

  @Field(() => DateComparisonInput, { nullable: true })
  modifiedTime?: DateComparisonInput;
}
