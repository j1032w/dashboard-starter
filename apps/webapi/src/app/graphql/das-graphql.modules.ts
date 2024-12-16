import { ListingGraphqlModule } from './real-estate-listings/listing-graphql.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ListingGraphqlModule],
  exports: [ListingGraphqlModule],
})
export default class DasGraphqlModules {}
