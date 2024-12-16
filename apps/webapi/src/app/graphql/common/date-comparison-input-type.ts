import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';

@InputType()
export default class DateComparisonInput {
  @Field(() => GraphQLISODateTime, { nullable: true })
  eq?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  gt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  gte?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  lt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  lte?: Date;

  @Field(() => [GraphQLISODateTime], { nullable: true })
  in?: Date[];

  @Field(() => [GraphQLISODateTime], { nullable: true })
  nin?: Date[];
}
