
import { Module } from '@nestjs/common';
import ListingGraphqlModule from "./real-estate-listings/listing-graphql.module";

@Module({
  imports: [ListingGraphqlModule],
  exports: [ListingGraphqlModule],
})
export default class DasGraphqlModules {}
