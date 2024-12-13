import { Injectable } from '@nestjs/common';
import { Db, Filter, FindOptions, Document   } from 'mongodb';
import { InjectDb } from 'nest-mongodb';

import { RealEstateListing } from '../../../core/domains';
import { RepositoryBase } from './repository-base';
import ListingRepositoryInterface from "../../../core/domains/real-estate/listing-repository.interface";



@Injectable()
export class ListingRepository extends RepositoryBase<RealEstateListing> implements ListingRepositoryInterface {
  constructor(@InjectDb() db: Db) {
    super(db, 'real_estate.listings');
  }

  async findByIdAsync(persistenceId: string): Promise<RealEstateListing> {
    const filter = { _id: this.stringIdToObjectId(persistenceId) } as Filter<RealEstateListing>;
    const result = await this.collection.findOne(filter);
    return this.updatePersistenceId(result);
  }

  async insertOneAsync(listing: RealEstateListing): Promise<RealEstateListing> {
    const result = await this.collection.insertOne(listing).then(() => listing);
    return this.updatePersistenceId(result);
  }

  async insertManyAsync(listings: RealEstateListing[]): Promise<RealEstateListing[]> {
    const results = await this.collection.insertMany(listings).then(() => listings);
    return this.updatePersistenceIds(results);
  }

  async findOneAndUpdateAsync(listing: RealEstateListing): Promise<RealEstateListing> {
    return this.collection
      .findOneAndUpdate({ _id: this.stringIdToObjectId(listing.persistenceId) }, listing, { upsert: false })
      .then(() => listing);
  }

  async deleteOneAsync(persistenceId: string) {
    return this.collection.deleteOne({ _id: this.stringIdToObjectId(persistenceId) });
  }

  async deleteManyAsync(filter: Filter<RealEstateListing>) {
    return this.collection.deleteMany(filter);
  }

  async findAllAsync(filter: Filter<RealEstateListing>, options?: FindOptions) {
    const results = await this.collection.find(filter, options).toArray();
    return this.updatePersistenceIds(results);
  }

  async aggregateAsync(pipeline: Document[]) {
    return await this.collection.aggregate(pipeline).toArray();
  }
}
