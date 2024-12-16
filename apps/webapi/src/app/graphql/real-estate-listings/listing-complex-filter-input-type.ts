import ListingConditionInputType from "./listing-condition-input-type";
import {Field, InputType} from "@nestjs/graphql";
import {IsOptional} from "class-validator";

@InputType()
export  default class ListingComplexFilterInput {
  @Field(() => [ListingComplexFilterInput], { nullable: true })
  not?: ListingComplexFilterInput[];

  @Field(() => [ListingComplexFilterInput], { nullable: true })
  and?: ListingComplexFilterInput[];

  @Field(() => [ListingComplexFilterInput], { nullable: true })
  or?: ListingComplexFilterInput[];

  @IsOptional()
  @Field(() => ListingConditionInputType, { nullable: true })
  listingCondition?: ListingConditionInputType;
}
