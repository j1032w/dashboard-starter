import {RealEstateListing} from "./real-estate-listing";
import {DeleteResult, Filter, FindOptions, Document} from "mongodb";

export default interface ListingRepositoryInterface {
  findByIdAsync(_id: string): Promise<RealEstateListing>;
  insertOneAsync(listing: RealEstateListing): Promise<RealEstateListing>;
  insertManyAsync(listings: RealEstateListing[]): Promise<RealEstateListing[]>;
  findOneAndUpdateAsync(listing: RealEstateListing): Promise<RealEstateListing>;
  deleteOneAsync(_id: string): Promise<DeleteResult>;
  deleteManyAsync(filter: Filter<RealEstateListing>): Promise<DeleteResult>;
  findAllAsync(filter: Filter<RealEstateListing>, options?:FindOptions): Promise<Partial<RealEstateListing>[]>;
  aggregateAsync(pipeline: Document[]): Promise<Document[]>;
}


export const LISTING_REPOSITORY = Symbol('LISTING_REPOSITORY');
