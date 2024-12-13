import { Inject, Injectable } from '@nestjs/common';
import { Filter, FindOptions } from 'mongodb';

import { RealEstateListing } from '../../domains';
import ListingResponseDto from '../../../controllers/real-estate/listing-response.dto';
import { plainToInstance } from 'class-transformer';
import ListingQueryServiceInterface from './listing-query-service.interface';
import ListingRepositoryInterface, { LISTING_REPOSITORY } from '../../domains/real-estate/listing-repository.interface';

@Injectable()
export class ListingQueryService implements ListingQueryServiceInterface {
  constructor(@Inject(LISTING_REPOSITORY) private readonly repository: ListingRepositoryInterface) {}

  async findOneByIdAsync(persistenceId: string) {
    const result = await this.repository.findByIdAsync(persistenceId);
    return plainToInstance(ListingResponseDto, result);
  }

  async insertOneAsync(listing: RealEstateListing) {
    const result = await this.repository.insertOneAsync(listing);
    return plainToInstance(ListingResponseDto, result);
  }

  async insertManyAsync(residentialProperties: ListingResponseDto[]) {
    const results = await this.repository.insertManyAsync(residentialProperties);
    return results.map((result) => plainToInstance(ListingResponseDto, result));
  }

  async updateOneAsync(listing: RealEstateListing) {
    const result = this.repository.findOneAndUpdateAsync(listing);
    return plainToInstance(ListingResponseDto, result);
  }

  async deleteOneAsync(persistenceId: string) {
    return this.repository.deleteOneAsync(persistenceId);
  }

  async deleteManyAsync(filter: Filter<RealEstateListing>) {
    return this.repository.deleteManyAsync(filter);
  }

  async findAllAsync(filter: Filter<RealEstateListing>, options?: FindOptions) {
    const result = await this.repository.findAllAsync(filter, options);
    return result.map((listing) => plainToInstance(ListingResponseDto, listing, { excludeExtraneousValues: true }));
  }

  async aggregateAsync(pipeline: Document[]) {
    return await this.repository.aggregateAsync(pipeline);
  }
}
