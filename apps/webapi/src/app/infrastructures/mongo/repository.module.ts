import { Module } from '@nestjs/common';
import { UtilityModule } from '../utils/utility.module';
import { ListingRepository } from './repositories';
import { LISTING_REPOSITORY } from '../../core/domains/real-estate/listing-repository.interface';

@Module({
  imports: [UtilityModule],
  providers: [{ provide: LISTING_REPOSITORY, useClass: ListingRepository }],
  exports: [LISTING_REPOSITORY],
})
export class RepositoryModule {}
