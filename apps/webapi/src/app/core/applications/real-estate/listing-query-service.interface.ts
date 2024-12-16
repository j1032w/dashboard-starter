import { RealEstateListing } from '../../domains';
import { DeleteResult, Filter, FindOptions, Document } from 'mongodb';
import ListingResponseDto from "../../../controllers/real-estate/listing-response.dto";

export default interface ListingQueryServiceInterface {
  findOneByIdAsync(persistenceId: string): Promise<ListingResponseDto>;

  insertOneAsync(listing: RealEstateListing): Promise<ListingResponseDto>;

  insertManyAsync(residentialProperties: RealEstateListing[]): Promise<ListingResponseDto[]>;

  updateOneAsync(listing: RealEstateListing): Promise<ListingResponseDto>;

  deleteOneAsync(persistenceId: string): Promise<DeleteResult>;

  deleteManyAsync(filter: Filter<RealEstateListing>): Promise<DeleteResult>;

  findAllAsync(filter: Filter<RealEstateListing>, options?: FindOptions<RealEstateListing>): Promise<Partial<ListingResponseDto>[]>;

  aggregateAsync(pipeline: Document[]): Promise<Document[]>;
}


export const LISTING_QUERY_SERVICE = Symbol('LISTING_QUERY_SERVICE');
