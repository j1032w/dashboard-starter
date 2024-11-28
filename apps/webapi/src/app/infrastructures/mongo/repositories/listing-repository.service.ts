import { Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { InjectDb } from 'nest-mongodb';
import { Listing } from '../../../core/domains';
import { UtilityService } from '../../utils';
import { MongoRepositoryGeneric } from './mongo-repository.generic';

@Injectable()
export class RealEstateListingRepository extends MongoRepositoryGeneric<Listing> {
  constructor(@InjectDb() db: Db, utilityService: UtilityService) {
    super(db, 'real_estate.listings', utilityService);
  }
}
