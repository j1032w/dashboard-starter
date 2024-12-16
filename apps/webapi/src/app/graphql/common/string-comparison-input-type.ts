import {Field, InputType} from "@nestjs/graphql";


@InputType()
export default class StringComparisonInput {
  @Field({ nullable: true })
  eq?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];
}
