import {Field, Float, InputType} from "@nestjs/graphql";


@InputType()
export default class NumberComparisonInput {
  @Field(() => Float, { nullable: true })
  eq?: number;

  @Field(() => Float, { nullable: true })
  gt?: number;

  @Field(() => Float, { nullable: true })
  gte?: number;

  @Field(() => Float, { nullable: true })
  lt?: number;

  @Field(() => Float, { nullable: true })
  lte?: number;

  @Field(() => [Float], { nullable: true })
  in?: number[];


}
