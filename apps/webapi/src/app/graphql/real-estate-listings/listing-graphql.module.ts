import { Module } from '@nestjs/common';

import ListingResolver from "./listing-resolver";
import {RealEstateApplicationModule} from "../../core/applications/real-estate";




@Module({
  imports: [RealEstateApplicationModule],
  providers: [ListingResolver],
  exports: [ListingResolver]
})
export default class ListingGraphqlModule {}
