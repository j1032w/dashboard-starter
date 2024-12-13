import { Module } from '@nestjs/common';
import { RepositoryModule } from '../../../infrastructures/mongo/repository.module';
import { ListingQueryService } from './listing-query.service';
import { LISTING_QUERY_SERVICE } from './listing-query-service.interface';

@Module({
  imports: [RepositoryModule],
  providers: [{ provide: LISTING_QUERY_SERVICE, useClass: ListingQueryService }],
  exports: [LISTING_QUERY_SERVICE],
})
export class RealEstateApplicationModule {}
