import { Module } from '@nestjs/common';
import { RealEstateApplicationModule } from '../core/applications/real-estate';

import { RealEstateListResolver } from './real-estate-list-resolver';

@Module({
  imports: [RealEstateApplicationModule],

  providers: [RealEstateListResolver],
})
export class RealEstateListGraphqlModule {}
