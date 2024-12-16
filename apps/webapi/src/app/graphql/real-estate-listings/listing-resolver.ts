import { Resolver, Query, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import {LISTING_QUERY_SERVICE} from "../../core/applications/real-estate";
import ListingQueryServiceInterface from "../../core/applications/real-estate/listing-query-service.interface";
import ListingComplexFilterInput from "./listing-complex-filter-input-type";
import ListingResponseDto from "../../controllers/real-estate/listing-response.dto";
import ListingConditionInputType from "./listing-condition-input-type";
import NumberComparisonInput from "../common/number-comparison-input-type";
import StringComparisonInput from "../common/string-comparison-input-type";
import DateComparisonInput from "../common/date-comparison-input-type";
import MongoQuery, {MongoComparisonOperators} from "../common/mongo-comparison-operator";


@Resolver(() => ListingResponseDto)
export default class ListingResolver {
  constructor(
    @Inject(LISTING_QUERY_SERVICE) private readonly listingQueryService: ListingQueryServiceInterface
  ) {}

  @Query(() => [ListingResponseDto], { name: 'getListings' })
  async getListings(
    @Args('filter', { type: () => ListingComplexFilterInput, nullable: true }) filter?: ListingComplexFilterInput
  ): Promise<Partial<ListingResponseDto>[]> {
    const mongoFilter = this.convertComplexFilterToMongoQuery(filter);
    return this.listingQueryService.findAllAsync(mongoFilter, {});
  }



  private convertComplexFilterToMongoQuery(filter?: ListingComplexFilterInput): MongoQuery {
    if (!filter) return {};

    const andClauses = filter.and?.map((f) => this.convertComplexFilterToMongoQuery(f));
    const orClauses = filter.or?.map((f) => this.convertComplexFilterToMongoQuery(f));
    const conditionQuery = filter.listingCondition
      ? this.convertConditionToMongoQuery(filter.listingCondition)
      : {};

    let query: MongoQuery = {};
    if (andClauses && Array.isArray(andClauses) && andClauses.length > 0) {
      query.$and = andClauses;
      if (Object.keys(conditionQuery).length > 0) {
        query.$and.push(conditionQuery);
      }
    } else if (orClauses && Array.isArray(orClauses) && orClauses.length > 0) {
      query.$or = orClauses;
      if (Object.keys(conditionQuery).length > 0) {
        query.$or.push(conditionQuery);
      }
    } else {
      // Only a condition
      query = conditionQuery;
    }

    return query;
  }

  private convertConditionToMongoQuery(condition: ListingConditionInputType): MongoQuery {
    const query: MongoQuery = {};
    const entries = Object.entries(condition) as [keyof ListingConditionInputType, unknown][];

    for (const [fieldName, compInput] of entries) {
      if (compInput) {
        query[fieldName as string] = this.buildComparison(compInput);
      }
    }

    return query;
  }

  private buildComparison(
    comparison: StringComparisonInput | NumberComparisonInput | DateComparisonInput
  ): MongoComparisonOperators<unknown> {
    const compQuery: MongoComparisonOperators<unknown> = {};
    if ('eq' in comparison && comparison.eq !== undefined) compQuery.$eq = comparison.eq;
    if ('gt' in comparison && comparison.gt !== undefined) compQuery.$gt = comparison.gt;
    if ('gte' in comparison && comparison.gte !== undefined) compQuery.$gte = comparison.gte;
    if ('lt' in comparison && comparison.lt !== undefined) compQuery.$lt = comparison.lt;
    if ('lte' in comparison && comparison.lte !== undefined) compQuery.$lte = comparison.lte;
    if ('in' in comparison && comparison.in !== undefined) compQuery.$in = comparison.in;

    return compQuery;
  }

}
